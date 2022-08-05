import { Request, Response } from "express";

import * as studyServices from "../services/studyServices.js"

export async function createStudy(req: Request, res: Response) {
    const {name} = req.body
    const userId = res.locals.userId;
    await studyServices.insertStudyDb({ })
    res.sendStatus(201)
}

// export async function getFolders(req: Request, res: Response) {
//     const userId = res.locals.userId;
//         const folders = await studyServices.getAllFolders(userId)
//         console.log(folders);
//         res.status(200).send(folders)
// }