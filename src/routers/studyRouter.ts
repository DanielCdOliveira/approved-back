import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { studySchema } from "../schemas/joiSchemas.js";
import { createStudy } from "../controllers/studyController.js";
const studyRouter = Router()

studyRouter.post("/study",verifyToken,schemaVerifier(studySchema), createStudy)

export default studyRouter