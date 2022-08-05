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