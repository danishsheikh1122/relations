import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   // const data = await prisma.onetoone.findUnique({
//   //   where: {
//   //     email: "sayemaqureshi94@gmail.com",
//   //   },
//   //   include: { ones: true },
//   // });
//   // if (!data) return NextResponse.json({ status: 404, message: "not found" });
//   // return NextResponse.json({ status: 200, data: data });
//   const postdata = await prisma.onetomany.findMany({ include: { urls: true } });

//   if (!postdata)
//     return NextResponse.json({ status: 404, message: "not found" });
//   return NextResponse.json({ status: 200, data: postdata });
// }

interface Check{
  name:string,
  email:string,
  password:string,
}

export async function POST(req: NextRequest) {
  const { name, email, password }:Check = await req.json();
  if (!name || !email || !password)
    return NextResponse.json({
      status: 400,
      message: "Please provide all the fields",
    });

  const isEmailExist = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (email)
    NextResponse.json({
      status: 405,
      message: "user with this email already exist",
    });

  const createUser = await prisma.users.create({
    data: { name, email, password },
  });

  if(!createUser)
    return NextResponse.json({ status: 400, message: "User not created" });
}
