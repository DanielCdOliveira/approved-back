import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { plannerSchema } from "../schemas/joiSchemas.js";
import { createPlanner ,getAllPlannersOfFolder,getAllPlannersOfUser, deletePlanner} from "../controllers/plannerController.js";

const plannerRouter = Router()

plannerRouter.post("/planner",verifyToken,schemaVerifier(plannerSchema), createPlanner)
plannerRouter.get("/planner/:folderId",verifyToken,getAllPlannersOfFolder)
plannerRouter.get("/planner/",verifyToken,getAllPlannersOfUser)
plannerRouter.delete("/planner/:id",verifyToken,deletePlanner)


export default plannerRouter