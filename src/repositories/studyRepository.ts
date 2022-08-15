import { prisma } from "../config/database.js";
import { CreateStudyData } from "../interfaces/interfaces.js"

export async function insertStudyDb(newStudy: CreateStudyData) {
  try {
    await prisma.study.create({ data: newStudy })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "study already registered"
      }
    }
  }
}
export async function getAllStudies(userId: number, folderId: number) {

  const studies = await prisma.study.findMany({
    where: { userId, folderId },
    select: {
      id: true,
      date: true,
      folder: { select: { name: true } },
      subject: { select: { name: true } },
      topic: { select: { name: true } },
    }
  }) as any
  studies.map(item => {
    item.folderName = item.folder.name;
    item.subjectName = item.subject.name;
    item.topicName = item.topic.name;
    delete item.folder;
    delete item.subject;
    delete item.topic;
  })
  return studies
}
export async function deleteStudyByFolderId(folderId: number) {
  await prisma.study.deleteMany({ where: { folderId } })
}
export async function deleteStudyBySubjectId(subjectId: number) {
  await prisma.study.deleteMany({ where: { subjectId } })
}