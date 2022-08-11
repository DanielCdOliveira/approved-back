/*
  Warnings:

  - You are about to drop the `Planner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Planner" DROP CONSTRAINT "Planner_folderId_fkey";

-- DropForeignKey
ALTER TABLE "Planner" DROP CONSTRAINT "Planner_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "Planner" DROP CONSTRAINT "Planner_topicId_fkey";

-- DropForeignKey
ALTER TABLE "Planner" DROP CONSTRAINT "Planner_userId_fkey";

-- DropTable
DROP TABLE "Planner";

-- CreateTable
CREATE TABLE "planners" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "folderId" INTEGER NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,
    "weekDay" INTEGER NOT NULL,

    CONSTRAINT "planners_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "planners" ADD CONSTRAINT "planners_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planners" ADD CONSTRAINT "planners_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planners" ADD CONSTRAINT "planners_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planners" ADD CONSTRAINT "planners_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "topics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
