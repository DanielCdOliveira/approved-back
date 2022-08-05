/*
  Warnings:

  - A unique constraint covering the columns `[name,folderId]` on the table `subjects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,subjectId]` on the table `topics` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "subjects" ALTER COLUMN "isDone" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "subjects_name_folderId_key" ON "subjects"("name", "folderId");

-- CreateIndex
CREATE UNIQUE INDEX "topics_name_subjectId_key" ON "topics"("name", "subjectId");
