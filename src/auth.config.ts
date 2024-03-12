import Google from "next-auth/providers/google"

import type { NextAuthConfig } from "next-auth"

const GOOGLE_ID = process.env.GOOGLE_ID!
const GOOGLE_SECRET = process.env.GOOGLE_SECRET!

export default {
    providers: [Google({clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET})],
    secret: process.env.NEXT_PUBLIC_SECRET
} satisfies NextAuthConfig