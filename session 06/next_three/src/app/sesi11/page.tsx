import { PrismaClient } from "@prisma/client/extension";

import { NextResponse } from "next/server";

const prisma = new PrismaClient()


export async function GET() {
  //get all posts
  const posts = await prisma.post.findMany();

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Posts",
      data: posts,
    },
    {
      status: 200,
    }
  );
}