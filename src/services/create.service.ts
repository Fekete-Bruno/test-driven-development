import { To_do_Creator } from "../protocols";
import repository from "../repositories/todo.repository";
import todoSchema from "../schemas";

function createOne(todo:To_do_Creator){
    const validation = todoSchema.validate(todo);
    if(validation.error){
        throw new Error("BadRequest");
    }

    const data = repository.insertOne(todo);
    return data;
}

const createService = {
    createOne
}

export default createService;