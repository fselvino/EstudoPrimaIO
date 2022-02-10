import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

/**
 * Cria ou conecta um usuario quando existir ou não
 */
async function main() {
   const result = await prisma.courses.create({
        data: {
            name:"Curso de Excel",
            duration:300,
            description: "Curso excelente de ReactJS",
            fk_teacherId: "13448423-7769-4843-a824-d4ed41433999"
        }
    })
    console.log(result)
}
main()