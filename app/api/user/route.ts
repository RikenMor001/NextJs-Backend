
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    try {
    const body = await req.json();
    prisma.user.create({
        data:{
            username: body.username,
            passwors: body.passwors
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
    try {
        // const headers = HEADERS || " ";
        /* 
            if(header){
            NextResponse.json({
            message: "Passed header is correct"
            }, {status: 200})
            }
        */
        const body = await req.body;
        prisma.user.findMany({
            where:{
                // username: body.username,
                // passwors: body.passwors
            }
        })  

        NextResponse.json({
            message: "User got the information"
        })
    }catch(error){
        NextResponse.json({
            error: "The error is :- " + error 
        }, {status: 411})
    }
    
}

