import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url!);
    const title = searchParams.get("title");

    if (title === null) {
        return new NextResponse("need to pass in title!!", { status: 404 })
    }

    const usersWithMarketingExperience = await prisma.user.findMany({
        where: {
            Experiences: {
                some: {
                    title: "marketer",
                },
            },
        },
        include: {
            Experiences: {
                select: {
                    title: true,
                    startDate: true
                  },
                  orderBy: {
                    startDate: 'asc'
                  }
            }, // Optionally include the Experience objects in the result
        },
    });



    return NextResponse.json(usersWithMarketingExperience)
}


