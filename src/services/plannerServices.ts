import { CreatePlannerData } from "../interfaces/interfaces.js";
import * as plannerRepository from "../repositories/plannerRepository.js"

export async function createPlannerDb(newPlanner: CreatePlannerData) {
    await plannerRepository.insertPlannerDb(newPlanner)
}