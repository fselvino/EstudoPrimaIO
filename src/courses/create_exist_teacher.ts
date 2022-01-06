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
                    id:"f5827890-33ef-4ded-8532-da9514df652a"
                }
            }
            
        }
    })
    console.log(result)
}
main()