import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import { json } from "stream/consumers";

export async function GET(request) {
  let postId = request.nextUrl.searchParams.get("postId");
  const serverSession = await auth()
  const visitorId = serverSession?.user.id

  const saves = await prisma.experience.findMany({

    where: {
      user: {
        id: postId,
        
      },
      likes: {
 
          some: {
            userId: visitorId
          }

      }
    },
    orderBy: {
      createdAt: "desc"
    },
    distinct: ['userId'],
    select: {
      id: true
    }

  });

  console.log("isSaves on server is " + JSON.stringify(saves))

  // This will return Save records with included savedUser and their Experiences
  // However, Experiences will include only the most recent one due to the 'take: 1'
  // You might need to manipulate the structure to fit your exact needs
  // const gpt = savedUsers.map(save => ({
  //   savedUserId: save.savedUser.id,
  //   mostRecentExperience: save.savedUser.Experiences[0] || null,
  // })).filter(save => save.mostRecentExperience !== null); // Filter out saved users without experiences

  return new NextResponse(JSON.stringify(saves), { status: 202 })
}