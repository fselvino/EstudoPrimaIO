import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 290,
            name:"Curso de React Native",
            description: "Curso excelete de React Native",
        },
    })

    console.log(result)
}

main()