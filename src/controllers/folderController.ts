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
    res.status(200).send(folders)
}
export async function getFolderById(req: Request, res: Response) {
    const userId = res.locals.userId;
    const folderId = parseInt(req.params.id)
    const folder = await folderServices.compareUserFolder(userId,folderId)
    res.status(200).send(folder)
}