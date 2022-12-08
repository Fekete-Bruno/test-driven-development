import app from "../src/app";
import supertest from "supertest";
import { clearAll } from "./factories/todo.factory";
import httpStatus from "http-status";
import { To_do_Creator } from "../src/protocols";
import { faker } from "@faker-js/faker";


const server = supertest(app);

beforeEach(() => {
    clearAll();
});

describe("POST /",()=>{
    it("should respond with status 400 when body is incorrect",async () => {
        const response = await server.post("/");

        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 201 and id when body is correct",async () => {
        const body: To_do_Creator ={
            text:faker.lorem.sentence(),
            is_done:faker.datatype.boolean()
        }
        const response = await server.post("/").send(body);

        expect(response.status).toBe(httpStatus.CREATED);
        expect(response.body).toEqual({
            id:1
        });
    });

    it("should add new post to database",async () => {
        const body: To_do_Creator ={
            text:faker.lorem.sentence(),
            is_done:faker.datatype.boolean()
        }
        const before = await server.get("/");

        await server.post("/").send(body);
        
        const after = await server.get("/");

        expect(before.body.length).toEqual(0);
        expect(after.body.length).toEqual(1);
    });
});