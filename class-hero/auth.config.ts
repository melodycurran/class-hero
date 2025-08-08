import type { NextAuthConfig } from 'next-auth'

export const authConfig = {

    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/account')
            const isOnEditor = nextUrl.pathname.startsWith('/worksheet-editor')

            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false
            } else if (isOnEditor) {
                if (isLoggedIn) return true
                return false
            }
            return true
        },
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id.toString()
                token.fname = user.fname
                token.lname = user.lname
                token.email = user.email
                token.ph = user.ph
                token.type = user.type
                token.account_type = user.account_type
                token.created_at = user.created_at
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id
                session.user.fname = token.fname
                session.user.lname = token.lname
                session.user.ph = token.ph
                session.user.type = token.type
                session.user.account_type = token.account_type
                session.user.created_at = token.created_at
            }
            return session
        }
    },
    providers: []
} satisfies NextAuthConfig