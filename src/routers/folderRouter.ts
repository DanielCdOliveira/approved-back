import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { folderSchema } from "../schemas/joiSchemas.js";
import { createFolder,getFolders } from "../controllers/folderController.js";

const folderRouter = Router()

folderRouter.post("/folder",verifyToken,schemaVerifier(folderSchema), createFolder)
folderRouter.get("/folder",verifyToken, getFolders)

export default folderRouter