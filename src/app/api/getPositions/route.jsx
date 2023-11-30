import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request, response) {
  let userId = request.nextUrl.searchParams.get("userId");

  const experiences = await prisma.experience.findMany({
    where: {
        userId: userId,
    },
    include: {
      pros: true,
      cons: true,
      dayEvents: true
    },
  });

  return NextResponse.json(experiences);
}
