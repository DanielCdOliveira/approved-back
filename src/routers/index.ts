import {Router} from 'express';
import userRouter from './userRouter.js';
import folderRouter from './folderRouter.js';
import subjectRouter from './subjectRouter.js';
import topicRouter from './topicRouter.js';
import studyRouter from './studyRouter.js';
const router = Router();

router.use(userRouter)
router.use(folderRouter)
router.use(subjectRouter)
router.use(topicRouter)
router.use(studyRouter)


export default router;