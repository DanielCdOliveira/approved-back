import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { plannerSchema } from "../schemas/joiSchemas.js";
import { createPlanner ,getAllPlannersOfFolder} from "../controllers/plannerController.js";

const plannerRouter = Router()

plannerRouter.post("/planner",verifyToken,schemaVerifier(plannerSchema), createPlanner)
plannerRouter.get("/planner/:folderId",verifyToken,getAllPlannersOfFolder)


export default plannerRouter