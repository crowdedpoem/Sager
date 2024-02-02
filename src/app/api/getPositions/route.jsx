import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(request, response) {
  let userId = request.nextUrl.searchParams.get("userId");

  const experiences = await prisma.experience.findMany({
    where: {
        userId: userId,
    },
  });

  return NextResponse.json(experiences);
}
