import { prisma } from "../config/database.js";

import { CreateTopicData } from "../interfaces/interfaces"

export async function insertSubjectDb(newTopic: CreateTopicData) {
  try {
    await prisma.topic.create({ data: newTopic })
  } catch (error) {
    if (error.code === "P2002") {
      throw {
        type: "conflict",
        message: "topic already registered"
      }
    }
  }
}
export async function getTopicById(id: number) {
  const subject = await prisma.topic.findFirst({ where: { id } })
  if (!subject) {
    throw {
      type: "not_found",
      message: "topic not found"
    }
  }
  return subject
}
export async function completeTopic(topicId: number) {
  await prisma.topic.update({
    where: {
      id: topicId,
    },
    data: {
      isDone: true,
    },
  })
}
export async function deleteTopicByFolderId(folderId: number) {
  await prisma.topic.deleteMany({ where: { folderId } })
}
export async function deleteTopicBySubjectId(subjectId: number) {
  await prisma.topic.deleteMany({ where: { subjectId } })
}