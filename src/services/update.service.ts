import { To_do_Creator } from "../protocols";
import repository from "../repositories/todo.repository";
import todoSchema from "../schemas";

function updateOne(todo:To_do_Creator,id:number){
    
    const todoExists = repository.findOne(id);
    if(!todoExists){
        throw new Error("NotFound");
    }

    const validation = todoSchema.validate(todo);
    if(validation.error){
        throw new Error("BadRequest");
    }
    
    const data = repository.updateOne(todoExists,todo);
    return data;
}

const updateService = {
    updateOne
}

export default updateService;