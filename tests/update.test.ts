import app from "../src/app";
import supertest from "supertest";
import { clearAll, createRandomToDo } from "./factories/todo.factory";
import httpStatus from "http-status";
import { To_do_Creator } from "../src/protocols";
import { faker } from "@faker-js/faker";


const server = supertest(app);

beforeEach(() => {
    clearAll();
});

describe("PUT /",()=>{
    it("should respond with status 404 if the id doesn't exist",async() =>{
        const response = await server.put("/1");

        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it("should respond with status 404 if the id is invalid",async() =>{
        const response = await server.put("/banana");

        expect(response.status).toBe(httpStatus.NOT_FOUND);
    });

    it("should respond with status 400 when body is not sent",async () => {
        const response = await server.put("/1");
    
        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
    it("should respond with status 400 when body text is incorrect",async () => {
        createRandomToDo();
        const response =  await server.put("/1").send({
            text:faker.datatype.number(),
            is_done:faker.datatype.boolean()
        });

        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });
    it("should respond with status 400 when body is_done is incorrect",async () => {
        createRandomToDo();
        const response =  await server.put("/1").send({
            text:faker.lorem.sentence(),
            is_done:faker.datatype.number()
        });

        expect(response.status).toBe(httpStatus.BAD_REQUEST);
    });

    it("should respond with status 201 and id when body is correct",async () => {
        createRandomToDo();
        const body: To_do_Creator ={
            text:faker.lorem.sentence(),
            is_done:faker.datatype.boolean()
        }
        const response = await server.put("/1").send(body);

        expect(response.status).toBe(httpStatus.CREATED);
        expect(response.body).toEqual({
            id:1
        });

        it("should update post on database",async () => {
            createRandomToDo();
            const body: To_do_Creator ={
                text:faker.lorem.sentence(),
                is_done:faker.datatype.boolean()
            }
            const before = await server.get("/");
    
            await server.put("/1").send(body);
            
            const after = await server.get("/");
    
            expect(before.body.length).toEqual(1);
            expect(after.body.length).toEqual(1);
            expect(after.body[0].text).toEqual(body.text);
            expect(after.body[0].is_done).toEqual(body.is_done);
        });
    });
});