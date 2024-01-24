import NextAuth from "next-auth"
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
    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email
        }
      })
    if(!dbUser){
      token.id = user!.id 
      return token
    }
    
    // console.log('### JWT CALLBACK ###')
    // console.log('token: ', token)
    // console.log('account: ', account)
    return {
      
      name: dbUser.name,
      image: dbUser.image,
      email:dbUser.email,
      role: dbUser.role
    };
  },
  async session({ session, token }) {
    if(token && session.user){
      session.user.image = token.image
      session.user.role = token.role
      
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



