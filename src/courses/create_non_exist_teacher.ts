import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
   const result = await prisma.courses.create({
        data: {
            name:"Curso de PTHON",
            duration:200,
            description: "Curso excelente de PTHON",
            teacher: {
                create:{
                    name: "Rafa camarda"
                }
            }
        }
    })
    console.log(result)
}
main()