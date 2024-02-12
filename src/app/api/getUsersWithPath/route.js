import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const career1 = searchParams.get("career1");
  const career2 = searchParams.get("career2")

  const usersWithSpecificExperiences = await prisma.user.findMany({
    where: {
      Experiences: {
        some: {
          OR: [
            { title: career1 },
            { title: career2 },
          ],
        },
      },
    },
    include: {
      Experiences: true, // Adjust according to what details you need
    },
  });
  //TODO fix manual filtering with discussion solution
  // https://github.com/prisma/prisma/discussions/8216
  // Filter users in JavaScript to ensure they have both experiences
  const filteredUsers = usersWithSpecificExperiences.filter(user => {
    const titles = user.Experiences.map(exp => exp.title);
    return titles.includes(career1) && titles.includes(career2);
  });




  return NextResponse.json(filteredUsers)
}


