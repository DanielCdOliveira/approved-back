import { User, Folder,Review,Study,Subject,Topic,Planner} from "@prisma/client";
export type CreateUserData = Omit<User, "id" | "createdAt">
export type LoginUserData = Omit<User, "id" | "createdAt" | "name">
export type CreateFolderData = Omit<Folder,"id">
export type CreateSubjectData = Omit<Subject,"id">
export type CreateTopicData = Omit<Topic,"id">
export type CreateStudyData = Omit<Study,"id">
export type CreatePlannerData = Omit<Planner,"id">
export type CreateReviewData = Omit<Review,"id"|"doneDate">