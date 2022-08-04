/*
  Warnings:

  - A unique constraint covering the columns `[name,userId]` on the table `folders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "folders_name_userId_key" ON "folders"("name", "userId");
