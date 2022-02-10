import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
async function main(){
    //retorno o registro mais recente ou seja o ultimo registro criado
    const course = await prisma.courses.findFirst({take: -1})
    console.log(course)
}
main()