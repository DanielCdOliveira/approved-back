import { User, Folder,Review,Study,Subject,Topic, } from "@prisma/client";
export type CreateUserData = Omit<User, "id" | "createdAt">
export type LoginUserData = Omit<User, "id" | "createdAt" | "name">
export type CreateFolderData = Omit<Folder,"id">