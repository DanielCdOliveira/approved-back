import app from "../src/app";
import supertest from "supertest"
import { prisma } from "../src/config/database.js"
import {jest} from "@jest/globals"

import { generateUser , generateSession} from "./factory/userFactory.js";
import * as userService from "../src/services/userServices.js"
import * as userRepository from "../src/repositories/userRepository.js"

describe("teste", () => {
    beforeEach(async () => {
        await prisma.user.deleteMany()
    });
    afterAll(async () => {
        await prisma.$disconnect();
    });
    it("should create user", async () => {        
        const user = await generateUser()
        await userService.createUser(user)
    });
})