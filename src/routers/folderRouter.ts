import { Router } from "express";

import verifyToken from "../middlewares/tokenVeryfier.js";
import { createFolder,getFolders } from "../controllers/folderController.js";

const folderRouter = Router()

folderRouter.post("/folder",verifyToken, createFolder)
folderRouter.get("/folder",verifyToken, getFolders)

export default folderRouter