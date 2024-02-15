import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

export async function GET(request) {
  let postId = request.nextUrl.searchParams.get("postId");
  const serverSession = await auth()
  const userId = serverSession?.user.id

  const savedUsers = await prisma.experience.findFirst({

    where: {
      user: {
        id: postId,
        myLikes: {
          some: {
            userId: userId
          }

        }
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    distinct: ['userId']

  });

  // This will return Save records with included savedUser and their Experiences
  // However, Experiences will include only the most recent one due to the 'take: 1'
  // You might need to manipulate the structure to fit your exact needs
  // const gpt = savedUsers.map(save => ({
  //   savedUserId: save.savedUser.id,
  //   mostRecentExperience: save.savedUser.Experiences[0] || null,
  // })).filter(save => save.mostRecentExperience !== null); // Filter out saved users without experiences
  const ret = savedUsers !== null
  return new NextResponse(ret, { status: 202 })
}