import type { NextAuthConfig } from 'next-auth'

export const authConfig = {

    pages: {
        signIn: '/account',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const isOnDashboard = nextUrl.pathname.startsWith('/account/dashboard')
            const isOnEditor = nextUrl.pathname.startsWith('/worksheet-editor')
            if (isOnDashboard) {
                if (isLoggedIn) return true
                return false
            } else if (isOnEditor) {
                if (isLoggedIn) return true
                return false
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/account/dashboard', nextUrl))
            }
            return true
        }
    },
    providers: []
} satisfies NextAuthConfig