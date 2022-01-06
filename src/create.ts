import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
async function main(){
    const course = await prisma.courses.create({
        data:{
            name:"Curso de ReactJS",
            description:"Curso excelente de ReactJS com Diego Fernandes",
            duration:200
        },    
    })
    console.log(course)
}
main()