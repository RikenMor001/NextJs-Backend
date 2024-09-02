
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: NextRequest){
    const body = await req.json();
    prisma.user.create({
        data:{
            username: body.username,
            passwors: body.passwors
        }
    })
    return Response.json({
        message: "User created successfully!!"
    })
}