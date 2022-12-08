import repository, { To_do_Creator } from "../../src/repositories/todo.repository";

export function createToDo(todo: To_do_Creator) {
    repository.insertOne(todo);
}