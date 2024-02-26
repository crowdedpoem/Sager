import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
    const topPosts = await prisma.user.findMany({
        orderBy: {
            views: "desc",
        },
        select: {
            Experiences: {
                select: {
                    title: true,
                    userId: true,
                    updatedAt: true,
                    description: true
                }
            }
        },
        distinct: ['id'],
        take: 5
    });

    // console.log("results are " + JSON.stringify(recentPosts))


    return NextResponse.json(topPosts);
}
