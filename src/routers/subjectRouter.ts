import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { subjectSchema } from "../schemas/joiSchemas.js";
import { createSubject,deleteSubject } from "../controllers/subjectController.js";

const subjectRouter = Router()

subjectRouter.post("/subject",verifyToken, schemaVerifier(subjectSchema),createSubject)
subjectRouter.delete("/subject/:id", verifyToken,deleteSubject)

export default subjectRouter