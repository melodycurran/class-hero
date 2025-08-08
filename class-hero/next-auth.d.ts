import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
    interface Session {
        user?: {
            _id: string,
            email?: string,
            fname?: string,
            lname?: string,
            ph?: string,
            type?: string,
            account_type?: string,
            created_at?: string,
        } & DefaultSession['user']
    }
    interface User extends DefaultUser {
        _id: string,
        email?: string,
        lname?: string,
        fname?: string,
        ph?: string,
        type?: string,
        account_type?: string,
        created_at?: string,
    }
}

declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        _id: string,
        email?: string,
        lname?: string,
        fname?: string,
        ph?: string,
        type?: string,
        account_type?: string,
        created_at?: string,
    }
}