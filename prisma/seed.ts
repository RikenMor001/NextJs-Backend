import { PrismaClient } from "@prisma/client";
import bcrypt from " bcrypt ";

const prisma = new PrismaClient();

async function Seeding(){
    const user = await prisma.user.upsert({
        where:{
            username: "Riken001"
        },
        update:{},
        create: {
            username: "Riken",
            password: await bcrypt.hash("Riken001", 10),
            Post: {
                author: "Riken Patel",
                title: "VishnuSashranamavali",
                content: "Devine names of lord vishnu"
            }
        }
    })
}


