import { Request, Response } from "express";

import * as folderServices from "../services/folderServices.js"

export async function createFolder(req: Request, res: Response) {
    const {name} = req.body
    const userId = res.locals.userId;
    await folderServices.insertFolderDb({ name, userId })
    res.sendStatus(201)
}

export async function getFolders(req: Request, res: Response) {
    const userId = res.locals.userId;
        const folders = await folderServices.getAllFolders(userId)
        console.log(folders);
        res.status(200).send(folders)
}