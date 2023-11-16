import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, response) {
  let postId = request.nextUrl.searchParams.get("postId");

  const experiences = await prisma.experience.findMany({
    where: {
        postId: postId,
    },
  });

  return NextResponse.json(experiences);
}
