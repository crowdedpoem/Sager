import { UserRole } from '@prisma/client'
import type {User} from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
    interface JWT {
     
    role: UserRole
    }
}

declare module 'next-auth' {
    interface Session{
        user: User & {
            role: String,
            image: String
        }
    }
}