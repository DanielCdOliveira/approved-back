import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { plannerSchema } from "../schemas/joiSchemas.js";
import { createPlanner ,getAllPlannersOfFolder,getAllPlannersOfUser} from "../controllers/plannerController.js";

const plannerRouter = Router()

plannerRouter.post("/planner",verifyToken,schemaVerifier(plannerSchema), createPlanner)
plannerRouter.get("/planner/:folderId",verifyToken,getAllPlannersOfFolder)
plannerRouter.get("/planner/",verifyToken,getAllPlannersOfUser)


export default plannerRouter