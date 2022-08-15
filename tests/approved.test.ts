import app from "../src/app";
import supertest from "supertest"
import { prisma } from "../src/config/database.js"
import { generateUser , generateSession} from "./factory/userFactory.js";

describe("teste", () => {
    beforeEach(async () => {
        await prisma.user.deleteMany()
    });
    afterAll(async () => {
        await prisma.$disconnect();
    });
    it("return 201 for new user", async () => {
        const user = await generateUser()
        console.log(user);
        const result = await supertest(app).post("/signup").send(user)
        expect(result.status).toEqual(201)
    });

    it("returns 409 for email registered", async () => {
        const user = await generateUser()
        await supertest(app).post("/signup").send(user)
        const result = await supertest(app).post("/signup").send(user)
        expect(result.status).toEqual(409)
    });

    it("return 200 for login sucess", async () => {
        const user = await generateSession()
        console.log(user);
        const result = await supertest(app).post("/signin").send(user)
        expect(result.status).toEqual(200)
    });


})