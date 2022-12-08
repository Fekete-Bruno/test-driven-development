import httpStatus from "http-status";
import supertest from "supertest";
import app from "../src/app";
import repository from "../src/repositories/todo.repository";

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
});