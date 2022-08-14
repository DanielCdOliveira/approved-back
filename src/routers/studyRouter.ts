import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { studySchema } from "../schemas/joiSchemas.js";
import { createStudy,getAllStudiesFromFolder } from "../controllers/studyController.js";
const studyRouter = Router()

studyRouter.post("/study",verifyToken,schemaVerifier(studySchema), createStudy)
studyRouter.get("/study/:id", verifyToken, getAllStudiesFromFolder)

export default studyRouter