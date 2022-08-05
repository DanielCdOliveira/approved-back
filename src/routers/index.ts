import {Router} from 'express';
import userRouter from './userRouter.js';
import folderRouter from './folderRouter.js';
import subjectRouter from './subjectRouter.js';
const router = Router();

router.use(userRouter)
router.use(folderRouter)
router.use(subjectRouter)


export default router;