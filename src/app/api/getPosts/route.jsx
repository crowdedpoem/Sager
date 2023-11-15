// getPost/route.jsx
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
  const recentPosts = await prisma.post.findMany();
  console.log(recentPosts);

  return NextResponse.json(recentPosts);
}
