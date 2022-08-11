import { prisma } from "../config/database.js";
import { CreatePlannerData } from "../interfaces/interfaces.js";

export async function insertPlannerDb(newPlanner : CreatePlannerData) {
    try {
        await prisma.planner.create({data:newPlanner})
    } catch (error) {
        if(error.code === "P2002"){
            throw{
                type:"conflict",
                message: "planner already exists"
            }
        }
        
    }
}