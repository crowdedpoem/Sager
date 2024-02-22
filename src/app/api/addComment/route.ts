import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";

export async function POST(request: Request) {
    // the request has content and userId 
    const visitorSession = await auth()
    const visitorEmail = visitorSession?.user?.email ?? ""
    const body = await request.json();
    const params = body.params

    const content = params["content"]
    // const userId = params["userId"]
    const expId = params["expId"]

    const visitor = await prisma.user.findUnique({
        where: {
            email: visitorEmail
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
                        authorId: visitor.id,
                        content: content
                    }
                ]
            }
        }
    });



    // replace null with result
    return NextResponse.json(null, { status: 200 });
}
