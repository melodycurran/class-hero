import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from 'next-auth/providers/credentials'
import Facebook from 'next-auth/providers/facebook';
import Google from 'next-auth/providers/google'
import z from 'zod'
import connectDB from "./lib/database";
import UserData from "./app/models/UserData";
import bcrypt from 'bcryptjs'
import { User } from "@/lib/definitions"


await connectDB()

async function getUser(email: string): Promise<User | null> {
    try {
        const user = await UserData.findOne({ email }).exec()
        return user

    } catch (error) {
        console.error('Failed to fetch user', error)
        throw new Error('Failed to fetch user')
    }
}


export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({
                        email: z.string(),
                        pw: z.string().min(6),
                    })
                    .safeParse(credentials)
                if (parsedCredentials.success) {
                    const { email, pw } = parsedCredentials.data
                    const user = await getUser(email)
                    if (!user) return null

                    const pwMatch = await bcrypt.compare(pw, user.pw)
                    if (pwMatch) return user
                }
                console.error('Invalid credentials')
                return null
            }
        }),
        Facebook,
        Google,
    ],
})