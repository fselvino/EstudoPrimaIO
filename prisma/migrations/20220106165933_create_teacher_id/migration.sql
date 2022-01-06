/*
  Warnings:

  - A unique constraint covering the columns `[teacherId]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `teacherId` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "teacherId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "courses_teacherId_key" ON "courses"("teacherId");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
