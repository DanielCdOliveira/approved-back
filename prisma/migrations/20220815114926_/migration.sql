/*
  Warnings:

  - Added the required column `folderId` to the `topics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "topics" ADD COLUMN     "folderId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "topics" ADD CONSTRAINT "topics_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
