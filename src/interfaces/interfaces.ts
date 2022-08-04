import { User } from "@prisma/client";
export type CreateUserData = Omit<User,"id"|"createdAt">
export type LoginUserData = Omit<User,"id"|"createdAt"|"name">