/*
  Warnings:

  - You are about to drop the column `time` on the `studies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "reviews" ALTER COLUMN "date" SET DATA TYPE TEXT,
ALTER COLUMN "doneDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "studies" DROP COLUMN "time";
