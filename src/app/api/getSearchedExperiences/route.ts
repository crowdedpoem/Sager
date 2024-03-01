import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

interface Exp {
  userId: string; // Updated to string to match the MongoDB $oid format
  title: string;
  description: string;
  updatedAt: string;
}

interface MongoDBExp {
  _id: { $oid: string };
  userId: { $oid: string };
  startDate: { $date: string };
  title: string;
  description: string;
  endDate: { $date: string };
  createdAt: { $date: string };
  updatedAt: { $date: string };
}

export async function GET(req: NextRequest, res: NextResponse) {
    console.log("starting call to get searchedExperience")
    const { searchParams } = new URL(req.url!);
    const title = searchParams.get("title")!;
    const page = Number(searchParams.get("page") ?? "0");
    const take = Number(searchParams.get("take") ?? "2");
    const skip = page * take;

    function mapMongoDBExpToExp(mongoDBExp: MongoDBExp): Exp {
      return {
        userId: mongoDBExp.userId.$oid, // Directly use the $oid string
        title: mongoDBExp.title,
        description: mongoDBExp.description,
        updatedAt: mongoDBExp.updatedAt.$date, // Convert the updatedAt to a string if necessary
      };
    }

    // Use MongoDB's native connection from Prisma to perform the search
    const posts = await prisma.experience.aggregateRaw({
        pipeline: [
            {
                $search: {
                    index: "auto_complete",
                    autocomplete: {
                        query: title,
                        path: "title",
                        fuzzy: {
                            maxEdits: 1,
                        },
                        tokenOrder: "sequential",
                    },
                },
            },
            {
                $skip: skip,
            },
            {
                $limit: take,
            },
        ],
    });

    // console.log(posts.map(mapMongoDBExpToExp));
    console.log("returning mapped json")
    return NextResponse.json(posts.map(mapMongoDBExpToExp));
}
