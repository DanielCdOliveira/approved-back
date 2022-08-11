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
    const planner  = await prisma.planner.findMany({
        where: { userId, folderId },
        select:{
            id:true,
            weekDay:true,
            folder:{select:{name:true}},
            subject: { select: { name: true }},
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