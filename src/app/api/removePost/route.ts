import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { NextApiRequest } from 'next';
import { NextResponse } from "next/server";


export async function DELETE(req: NextApiRequest) {
    const {searchParams} = new URL(req.url!);
    const userId = searchParams.get("userId");
    if(userId === null){
        return new NextResponse("need to pass in userid", {status: 404})
    }
    const serverSession = await auth()
    const role = serverSession?.user.role
    if( role === UserRole.ADMIN){
        await prisma.experience.deleteMany({
            where: {userId: userId}
        })
        return new NextResponse("hola mfer", {status: 200})
    }
    else{
        return new NextResponse("locked out", {status: 403})
    }
}