import { faker } from "@faker-js/faker";
import repository, { To_do_Creator } from "../../src/repositories/todo.repository";

export function createToDo(todo: To_do_Creator) {
    return repository.insertOne(todo);
}

export function createRandomToDo(){
    const todo: To_do_Creator = {
        text: faker.lorem.sentence(),
        is_done:faker.datatype.boolean()
    }
    
    return repository.insertOne(todo);
}