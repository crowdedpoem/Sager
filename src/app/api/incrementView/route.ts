import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
    const { searchParams } = new URL(req.url!);
    const clickedPost = searchParams.get("clickedPost")!;
    const topPosts = await prisma.user.update({
        where: {
            id: clickedPost
        },
        data: { views: { increment: 1 } }
    });
    return new NextResponse("incremented");
}
