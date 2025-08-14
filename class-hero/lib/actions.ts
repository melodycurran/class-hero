'use server'
import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'
import { saveNewUserData } from '@/lib/userQueries'
import { getOneProject } from '@/lib/projectQueries'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { redirect } from 'next/navigation'
import { FormState } from '@/lib/definitions'
import { isValidPhoneNumber, parsePhoneNumberWithError } from 'libphonenumber-js'
import { insertWorksheetFromEditor } from '@/lib/projectQueries'
import { nanoid } from 'nanoid'
import { getDifferentKeys } from '@/lib/utils'
import { compareObjects } from '@/lib/utils'
import { updateProjectFields } from '@/lib/projectQueries'


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
    await signOut({ redirectTo: '/login' })
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
        if (response) {
            redirect('/login?registered=true')
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

export async function saveDesignData(prevState: any | undefined, formData: FormData) {
    try {
        const projectId = nanoid()
        const rawDesignData = {
            projectName: formData.get('projectName'),
            width: formData.get('width'),
            height: formData.get('height'),
            userId: formData.get('userId'),
        }

        console.log('data', rawDesignData)

        const response = await insertWorksheetFromEditor(projectId, rawDesignData)

        if (response) {
            redirect(`/worksheet-editor/${projectId}`)
        }

    } catch (error: any) {
        if (error.message === 'NEXT_REDIRECT') {
            throw error
        }
        return {
            message: 'Sorry, an unexpected error occured',
            errors: error.message,
            success: false
        }
    }
}

export async function updateFields(prevState: any | undefined, formData: FormData) {

    try {

        const updatedData = {
            projectId: formData?.get('projectId'),
            projectName: formData?.get('projectName'),
            width: formData?.get('width'),
            height: formData?.get('height'),
            userId: formData?.get('userId'),
            jsonTemplate: formData?.get('jsonTemplate'),
        }

        const projectId = updatedData?.projectId
        let projectData

        if (typeof projectId !== 'string') return

        projectData = await getOneProject(projectId)

        if (!projectData || 'message' in projectData) throw new Error

        const projectDataObj = projectData.toObject()

        const isEqual = compareObjects(updatedData, projectDataObj)

        if (isEqual) return

        const keys = getDifferentKeys(projectDataObj, updatedData)

        const updateKeys: any = {}

        keys.forEach(key => {
            updateKeys[key] = updatedData[key]
        })

        const response = await updateProjectFields(projectId, updateKeys)

        const responseJson = JSON.stringify(response)
        return responseJson
    } catch (error) {
        console.error('Error', error)
        return error
    }
}

export async function processPayment(prevState: any | undefined, formData: FormData) {
    const paymentData = {
        fname: formData.get('fname'),
        lname: formData.get('lname'),
        email: formData.get('email'),
        cardNum: formData.get('cardNum'),
        cvv: formData.get('cvv'),
    }

    const success = true

    if (!success) {
        return { success: false, message: 'Payment unsuccessful!' }
    }

    return { success: true, message: 'Payment successful!' }
}
