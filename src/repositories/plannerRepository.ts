import { number } from "joi";
import { prisma } from "../config/database.js";
import { CreatePlannerData } from "../interfaces/interfaces.js";

export async function insertPlannerDb(newPlanner: CreatePlannerData) {
    try {
        await prisma.planner.create({ data: newPlanner })
    } catch (error) {
        if (error.code === "P2002") {
            throw {
                type: "conflict",
                message: "planner already exists"
            }
        }

    }
}
export async function getAllPlannersofFolderDb(userId: number, folderId: number) {
    const planner = await prisma.planner.findMany({
        where: { userId, folderId },
        select: {
            id: true,
            weekDay: true,
            folder: { select: { name: true } },
            subject: { select: { name: true } },
            topic: { select: { name: true } },
        }
    }) as any
    planner.map(item => {
        item.folderName = item.folder.name;
        item.subjectName = item.subject.name;
        item.topicName = item.topic.name;
        delete item.folder;
        delete item.subject;
        delete item.topic;
    })
    return planner
}
export async function getAllPlannersofUserDb(userId: number) {
    const planner = await prisma.planner.findMany({
        where: { userId },
        select: {
            id: true,
            weekDay: true,
            folder: { select: { name: true } },
            subject: { select: { name: true } },
            topic: { select: { name: true } },
        }
    }) as any
    planner.map(item => {
        item.folderName = item.folder.name;
        item.subjectName = item.subject.name;
        item.topicName = item.topic.name;
        delete item.folder;
        delete item.subject;
        delete item.topic;
    })
    return planner
}
export async function deletePlannerByPlannerId(plannerId: number) {
    try {
      await prisma.planner.delete({ where: {id:plannerId } })
    } catch (error) {
      console.log(error);
  
    }
  }
export async function deletePlannerByFolderId(folderId: number) {
    await prisma.planner.deleteMany({ where: { folderId } })
}
export async function deletePlannerBySubjectId(subjectId: number) {
    await prisma.planner.deleteMany({ where: { subjectId } })
}
export async function deletePlannerByTopicId(topicId: number) {
    await prisma.planner.deleteMany({ where: { topicId } })
}