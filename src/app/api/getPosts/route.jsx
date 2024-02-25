// getPost/route.jsx
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(request, response) {
    let isDistinctParam = request.nextUrl.searchParams.get("isDistinct");
    let isDistinct = isDistinctParam === "true";

    let query = {
        take: 10,
        orderBy: {
            createdAt: "desc",
        }
    };

    // Add the distinct property to the query object only if isDistinct is true
    if (isDistinct) {
        query.distinct = ['userId'];
    }

    const recentPosts = await prisma.experience.findMany(query);


    return NextResponse.json(recentPosts);
}
