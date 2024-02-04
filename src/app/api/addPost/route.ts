import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { auth } from "@/auth";

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
  const serverSession = await auth()
  const body = await request.json();
  const email = body["email"];
  if (serverSession?.user.email !== email){
    return new NextResponse("you can't edit other peoples stuff", {status: 403})
  }
  const data = removeWhitespace(body["experience"]);
  console.log(data);
  const tag = body["tag"]
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

  // this keeps on creating new tags, instead we should link to a current tag if possible
        // 1. find in prisma.tag for tag of same name
        //    if tag exists, connect user and tag
        //    else create tag like this
      const tagsWithName = prisma.tag.find({
        where: {
          name: tag
        }
      })
      const tagExists = !!tagsWithName 
      if(tagExists){
        // connect
        await prisma.user.update({
          where: { email: email },
          data: {
            tags: {
              connect: [{ name: tag }],
            },
          },
        });
        
      }
      else{
        prisma.user.update({
          where: {
            email: email,
          },
          data: {
            Tags: {create: [
              {
                name: tag
              }
            ]}
          },
        });
      }
        

  // replace null with result
  return NextResponse.json(null, { status: 200 });
}
