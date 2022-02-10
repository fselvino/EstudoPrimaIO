import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
const result = await prisma.courses.update({
    where: {
        id: "a0d8864d-fd0c-4b77-8425-636400ff978b"
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