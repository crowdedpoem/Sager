import { NextResponse } from "next/server";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function removeWhitespace(data: any){
  for(const key in data){
    if(typeof data[key] === "string"){
      data[key] = data[key].trim()
    }
    else if(typeof data[key] === "object"){
      data[key] = removeWhitespace(data[key])
    }
  }
  return data
}

export async function POST(request: Request) {
  const body = await request.json();
  const data = removeWhitespace(body)
  for(const timeline of data){
    console.log("in post say hi")
    console.log(timeline.title)
  



  const result = await prisma.post.create({
    data: {
      user: {create: {
         name: "thomas",
         email: "thomas@gmail.com",
       }}
      ,

      Experiences: {
        create: [
          {
            startDate: timeline.startDate,
            title: timeline.title,
            description: timeline.description,
            endDate: timeline.endDate,
            pros: {
              create: timeline.pros
            },
            cons: {
              create: timeline.cons
              
              
              // [
              //   {
              //     description: "con description",
              //   },
              // ],
            },
             
            dayEvents: {
              create: [
                {
                  description: "day description",
                  startTime: "2023-11-01T20:11:12.000Z",
                  endTime: "2023-11-01T20:11:12.000Z",
                  title: "day in life title",
                },
              ],
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
