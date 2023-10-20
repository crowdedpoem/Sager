import NextAuth from "next-auth/next";
import prisma from '../../../libs/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        // add more providers if necessary
        CredentialsProvider({
            name:"credentials",
            credentials:{
                email: {label: "Email", type: "text", placeholder: "enter email"},
                password: {label: "Password", type: "password"},
                username: {label: "username", type: "text", placeholder: "enter username"}
            },
            async authorize(credentials){
                // check if email and password are there
                if(!credentials.email || !credentials.password){
                    throw new Error("please enter a email and password")
                }
                // check if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                // if no user was found
                if(!user || !user?.hashedPassword){
                    throw new Error('no user found')
                }
                // check if passwords match
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                // if passwords do not match
                if(!passwordMatch){
                    throw new Error('Incorrect Password')
                }

                return user
            }

        })
    ],
    secret: process.env.SECRET ,
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development",

 }

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}