// getPost/route.jsx
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request) {
    const recentPosts = await prisma.experience.findMany({
        take: 10, // Limit the result to 10 objects
        orderBy: {
            createdAt: "desc", // Order by createdAt field in descending order (assuming there's a createdAt field)
        },
    });

    return NextResponse.json(recentPosts);
}
