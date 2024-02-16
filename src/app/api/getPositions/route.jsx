import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(request, response) {
  let userId = request.nextUrl.searchParams.get("userId");

  const experiences = await prisma.experience.findMany({
    where: {
        userId: userId,
    },
    include: {
      pros: {select: { description: true}},
      cons: {select: { description: true}},
      dayEvents: {select: { description: true}},
      comments: {
        select: {
          content: true,
          createdAt: true,
          Author: {
            select: {
              image:true,
              name: true
            }
          }
        }
      }
    },
  });

  return NextResponse.json(experiences);
}
