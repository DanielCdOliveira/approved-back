/*
  Warnings:

  - A unique constraint covering the columns `[folderId,subjectId,topicId,userId,weekDay]` on the table `planners` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "planners_folderId_subjectId_topicId_userId_weekDay_key" ON "planners"("folderId", "subjectId", "topicId", "userId", "weekDay");
