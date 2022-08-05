import { Request, Response } from "express";

import * as folderServices from "../services/folderServices.js"

export async function createFolder(req: Request, res: Response) {
    const {name} = req.body
    const userId = res.locals.userId;
    await folderServices.insertFolderDb({ name, userId })
    res.sendStatus(201)
}

export async function getFolders(req: Request, res: Response) {
    // console.log("AQUI");
    // const userId = res.locals.userId;
    // try {
    //     const answer = await subjectsServices.getAllSubjects(userId)
    //     console.log(answer);


    //     res.status(200).send(answer)
    // } catch (error) {

    // }
}