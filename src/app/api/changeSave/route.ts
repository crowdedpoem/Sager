import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { NextApiRequest } from 'next';
import { NextResponse } from "next/server";


export async function GET(req: NextApiRequest) {
    const {searchParams} = new URL(req.url!);
    const expId = searchParams.get("expId");
    const shouldSave = searchParams.get("shouldSave") 
    if(expId === null || shouldSave === null){
        return new NextResponse("need to pass in expId and shouldSave", {status: 404})
    }
    const serverSession = await auth()
    const saverId = serverSession?.user.id
    console.log(shouldSave)
    console.log(typeof(shouldSave))
    if(shouldSave === "true"){
      console.log("entered should save")
      const res = await prisma.save.create({
        data: {
          
          user: {
            connect: { id: saverId }, // Connects the Save to the User performing the save
          },
          exp: {
            connect: { id: expId }, // Connects the Save to the User being saved
          }
        }
      });
    } else{
      console.log("deleting")
      const res = await prisma.save.deleteMany({
        where: {
          expId: expId,
          userId: saverId
          
        }
      });
    }
    
      return new NextResponse("hola", {status: 202})
    }

    
