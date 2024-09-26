
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    try {
    const body = await req.json();
    prisma.user.create({
        data:{
            username: body.username,
            password: body.password 
        }
    })
    return Response.json({
        message: "User created successfully!!",        
    })}catch (e){
        NextResponse.json({
            message: "error while creating the user"
        })
        console.log(e)
    }
}

/*1. Get the headers
  2. Verify the headers
  3. Get the jwt token
  4. Verify the token 
  5. If the token and secret is correct than 
  6. Pass the token to the user and let them access the information from the database.
*/

export default async function GET(req: NextRequest, res: NextResponse){
    const header = req.headers;
    const authHeader = req.headers.get("Authorization");
    if(!authHeader){
        return NextResponse.json({
            message:"No authorization header present" 
        }, {status: 401})
    }
    const bearer = authHeader.split(" ")[1];
    if (!bearer){
        return NextResponse.json({
            message: "No bearer token present"
        }, {status: 401})
    }
    const username = req.nextUrl.searchParams.get("username");
    const password = req.nextUrl.searchParams.get("password");
    if(!username || !password){
        return NextResponse.json({
            message: "No username or password present"
        }, {status: 401})
    }
    const user = await prisma.user.findMany({
        where: {
            username: username,
            password: password
        }
    })
    if (user){
        return NextResponse.json({
            message: "User got the information"
        })
    }
}




