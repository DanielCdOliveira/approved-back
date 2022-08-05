/*
  Warnings:

  - A unique constraint covering the columns `[name,folderId,userId]` on the table `subjects` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,subjectId,userId]` on the table `topics` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "subjects_name_folderId_key";

-- DropIndex
DROP INDEX "topics_name_subjectId_key";

-- CreateIndex
CREATE UNIQUE INDEX "subjects_name_folderId_userId_key" ON "subjects"("name", "folderId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "topics_name_subjectId_userId_key" ON "topics"("name", "subjectId", "userId");
