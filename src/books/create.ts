import { PrismaClient } from "@prisma/client";
import { privateEncrypt } from "crypto";
import { mainModule } from "process";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.books.create({
        data:{
            name:"Arquitetura Limpa",
            author_id: "50f3f2bf-38c0-4944-8cf2-c34bd79a4bc4"
            
        }
    })
    console.log(result)
}

main()