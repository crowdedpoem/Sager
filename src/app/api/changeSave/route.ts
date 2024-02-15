import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { NextApiRequest } from 'next';
import { NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
    const {searchParams} = new URL(req.url!);
    const postId = searchParams.get("postId");
    const shouldSave = searchParams.get("shouldSave") 
    if(postId === null || shouldSave === null){
        return new NextResponse("need to pass in postId and shouldSave", {status: 404})
    }
    const serverSession = await auth()
    const id = serverSession?.user.id
    console.log(shouldSave)
    console.log(typeof(shouldSave))
    if(shouldSave === "true"){
      console.log("entered should save")
      const res = await prisma.save.create({
        data: {
          
          user: {
            connect: { id: id }, // Connects the Save to the User performing the save
          },
          poster: {
            connect: { id: postId }, // Connects the Save to the User being saved
          }
        }
      });
    } else{
      console.log("deleting")
      const res = await prisma.save.deleteMany({
        where: {
          postId: postId,
          userId: id
          
        }
      });
    }
    
      return new NextResponse("hola", {status: 202})
    }

    
