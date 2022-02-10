import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
   const result = await prisma.courses.create({
        data: {
            name:'Curso de React Native',
            description:"Curso excelte de React Native",
            duration:300,
            teacher:{
                connect:{
                    id:"8754b8e3-d96a-4a6b-9f86-0a44a7780f1e"
                }
            }
            
        }
    })
    console.log(result)
}
main()