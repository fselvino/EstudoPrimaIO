import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
const result = await prisma.courses.update({
    where: {
        id: "58928e76-cc77-4d5b-80da-6c16486141ba"
    },
    data: {
        duration:250,
        name:"Curso de ReactJS",
        description:"Curso muito excelente de ReactJS com Diego Fernandes"
    }
})
    console.log(result)
}

main()