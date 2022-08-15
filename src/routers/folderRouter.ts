import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { folderSchema } from "../schemas/joiSchemas.js";
import { createFolder,getFolders,getFolderById,deleteFolder } from "../controllers/folderController.js";


const folderRouter = Router()

folderRouter.post("/folder",verifyToken,schemaVerifier(folderSchema), createFolder)
folderRouter.get("/folder",verifyToken, getFolders)
folderRouter.get("/folder/:id",verifyToken, getFolderById)
folderRouter.delete("/folder/:id",verifyToken, deleteFolder)

export default folderRouter