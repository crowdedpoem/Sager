import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {

    const { searchParams } = new URL(req.url!);
    const page = Number(searchParams.get("page") ?? "0")
    const take = Number(searchParams.get("take") ?? "2")



    const recentPosts = await prisma.experience.findMany({
        skip: (page * take),
        take: take,
        
        orderBy: {
            updatedAt: "desc",
        },
        select: {
            title: true,
            userId: true,
            updatedAt: true,
            description: true
        },
        distinct: ['userId']

    });

    console.log("page is " + page + " take is " + take)
    // console.log("results are " + JSON.stringify(recentPosts))


    return NextResponse.json(recentPosts);
}
