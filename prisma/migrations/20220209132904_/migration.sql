/*
  Warnings:

  - You are about to drop the column `teacherId` on the `courses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[fk_teacherId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_teacherId_fkey";

-- DropIndex
DROP INDEX "courses_teacherId_key";

-- AlterTable
ALTER TABLE "courses" DROP COLUMN "teacherId",
ADD COLUMN     "fk_teacherId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_teacherId_key" ON "courses"("fk_teacherId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teacherId_fkey" FOREIGN KEY ("fk_teacherId") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
