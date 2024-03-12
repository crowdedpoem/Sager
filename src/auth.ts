import NextAuth, { Session } from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"
import authConfig from "@/auth.config"
import prisma from "@/app/libs/prismadb"


export const {
  
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async signIn({user}){
      // return false if user is removed by admin
      return true
    },
    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email
        }
      })
    if(!dbUser){
      return token
    }
    // console.log("db user " + JSON.stringify(dbUser))
    token.role = dbUser.role
    token.id = dbUser.id 
    token.image = dbUser.image
    return token
  },
  async session({ session, token}: {session: Session, token?: any}) {
    if(token && session.user){
      session.user.image = token.image
      session.user.role = token.role
      session.user.id = token.id
      
    }
    return session;
  }
    // async session({session,token}){
    //   return session
    // },
    // async jwt({token, user, account, profile, session}){
    //   return token
    // }
  },
  adapter: PrismaAdapter(prisma),
  session: {strategy: "jwt"}, 
  ...authConfig
})



