'use server'
import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'
import { saveNewUserData } from '@/lib/query'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { FormState } from './definitions'
import { isValidPhoneNumber, parsePhoneNumberWithError } from 'libphonenumber-js'


export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid Credentials'
                default:
                    return 'Something went wrong'
            }
        }
        throw error
    }
}

export async function facebookSignIn() {
    await signIn("facebook")
}

export async function googleSignIn() {
    await signIn("google")
}

export async function signOutUser() {
    await signOut({ redirectTo: '/account' })
}

export async function registerUser(prevState: FormState | undefined, formData: FormData): Promise<FormState | undefined> {

    const pwReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    try {
        const rawFormData = {
            fname: formData.get('fname'),
            lname: formData.get('lname'),
            email: formData.get('email'),
            ph: formData.get('ph'),
            pw: formData.get('pw'),
            type: formData.get('type'),
            account_type: formData.get('account_type'),
            created_at: formData.get('created_at')
        }

        const parsedUserData = z.object({
            fname: z.string().min(1, 'First name is required'),
            lname: z.string().min(1, 'Last name is required'),
            email: z.email('Invalid email address is entered'),
            ph: z.string().min(10, 'Phone number must be at least 10 digits').refine(
                (ph) => isValidPhoneNumber(ph, 'US') || isValidPhoneNumber(ph, 'PH'), 'Invalid phone number'
            ).transform((ph) => {
                try {
                    const parsedPh = parsePhoneNumberWithError(ph)
                    return parsedPh ? parsedPh.number : ''
                } catch (error) {
                    return ''
                }

            }),
            pw: z.string().min(8, 'Password should be at least 8 characters long').regex(pwReg, 'Password must include at one uppercase letter, one lowercase letter, one number, and one special character'),
            type: z.string(),
            account_type: z.string(),
            created_at: z.string()
        }).safeParse(rawFormData)

        if (!parsedUserData.success) {
            console.error(parsedUserData.error.flatten().fieldErrors)

            return {
                message: 'Validation error failed',
                errors: parsedUserData.error.flatten().fieldErrors,
                success: false
            }
        }

        const { pw } = parsedUserData.data;

        let newData

        try {
            const hashedPw = await bcrypt.hash(pw, 10)
            newData = {
                ...parsedUserData.data,
                pw: hashedPw
            }

        } catch (error) {
            console.error('Unable to hash password', error)
            return {
                message: 'A server error occured. Please try signing up again',
                errors: { pw: ['Failed to process password'] },
                success: false
            }
        }

        const response = await saveNewUserData(newData)
        if (response?.success) {
            redirect('/account?registered=true')
        }

    } catch (error: any) {
        if (error.message === 'NEXT_REDIRECT') {
            throw error
        }
        console.error('Unexpected error occured')
        return {
            message: 'Sorry, an unexpected error occured',
            errors: error.message,
            success: false
        }
    }
}
