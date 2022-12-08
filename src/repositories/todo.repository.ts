import { To_do, To_do_Creator } from "../protocols";
import database from "../database/mock-database";

function findMany(){
    return database;
}

function findOne(id: number){
    return database.find((e)=>e.id===id)
}

function insertOne(todo: To_do_Creator){
    if(database.length===0){
        database.push({
            id: 1,
            text: todo.text,
            is_done: todo.is_done
        });
        return { id: 1 };
    }
    let id = database[database.length-1].id + 1
    database.push({
        id,
        text: todo.text,
        is_done: todo.is_done
    });
    return { id };
}

function updateOne(todo: To_do,newTodo: To_do_Creator){
    todo.text = newTodo.text;
    todo.is_done = newTodo.is_done;
}

function cleanDb(){
    database.length = 0;
}

const repository = {
    findMany,
    findOne,
    insertOne,
    updateOne,
    cleanDb
}

export default repository;