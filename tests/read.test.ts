import httpStatus from "http-status";
import supertest from "supertest";
import { faker } from "@faker-js/faker";
import { createToDo } from "./factories/todo.factory";
import repository, {To_do_Creator} from "../src/repositories/todo.repository";
import app from "../src/app";

const server = supertest(app);

beforeEach(() => {
    repository.cleanDb();
});

describe("GET /", ()=>{
    it("should respond with status 200 and empty array if list is empty ",async() =>{
        const response = await server.get("/");

        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([]);
    });
    
    it("should respond with status 200 and data array ",async() =>{
        const todo: To_do_Creator = {
            text: faker.lorem.sentence(),
            is_done:faker.datatype.boolean()
        }
        createToDo(todo);
        
        const response = await server.get("/");
        expect(response.status).toBe(httpStatus.OK);
        expect(response.body).toEqual([{
            id:expect.any(Number),
            text:todo.text,
            is_done:todo.is_done
        }]);
    });
});