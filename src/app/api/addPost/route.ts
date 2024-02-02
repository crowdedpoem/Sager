import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

function removeWhitespace(data: any) {
  for (const key in data) {
    if (typeof data[key] === "string") {
      data[key] = data[key].trim();
    } else if (typeof data[key] === "object") {
      data[key] = removeWhitespace(data[key]);
    }
  }
  return data;
}

export async function POST(request: Request) {
  const body = await request.json();
  const email = body["email"];
  const data = removeWhitespace(body["experience"]);
  console.log(data);
  for (const experience of data) {
    console.log("in post say hi");
    console.log(experience.title);

    const result = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        Experiences: {
          create: [
            {
              startDate: experience.startDate,
              title: experience.title,
              description: experience.description,
              endDate: experience.endDate,
              pros: {
                create: experience.pros,
              },
              cons: {
                create: experience.cons,
              },

              dayEvents: {
                create: experience.dayEvents,
              },
            },
          ],
        },
      },
    });
  }

  // replace null with result
  return NextResponse.json(null, { status: 200 });
}
