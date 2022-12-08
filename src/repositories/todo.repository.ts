import database from "../database/mock-database.js";
import { To_do } from "../protocols.js";

function findMany(){
    return database;
}

function findOne(id: number){
    return database.find((e)=>e.id===id)
}

function insertOne(todo: To_do_Creator){
    database.push({
        id: database[database.length-1].id + 1,
        text: todo.text,
        is_done: todo.is_done
    })
}

function updateOne(todo: To_do,newTodo: To_do_Creator){
    todo.text = newTodo.text;
    todo.is_done = newTodo.is_done;
}

function cleanDb(){
    database.length = 0;
}

export type To_do_Creator = Omit <To_do,"id">

const repository = {
    findMany,
    findOne,
    insertOne,
    updateOne,
    cleanDb
}

export default repository;