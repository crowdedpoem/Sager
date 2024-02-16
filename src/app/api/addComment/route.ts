import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";

export async function POST(request: Request) {
    // the request has content and userId 
    const authorSession = await auth()
    const authorEmail = authorSession?.user?.email ?? ""
    const body = await request.json();
    const params = body.params

    const content = params["content"]
    const userId = params["userId"]
    const expId = params["expId"]

    const author = await prisma.user.findUnique({
        where: {
            email: authorEmail
        }, select: {
            id: true
        }

    })

    const result = await prisma.experience.update({
        where: {
            id: expId
        },
        data: {
            comments: {
                create: [
                    {
                        authorId: author.id,
                        content: content
                    }
                ]
            }
        }
    });



    // replace null with result
    return NextResponse.json(null, { status: 200 });
}
