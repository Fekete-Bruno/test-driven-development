import database from "../database/mock-database";
import { To_do } from "../protocols";

function findMany(){
    return database;
}

function cleanDb(){
    database.length = 0;
}

const repository = {
    findMany,
    cleanDb
}

export default repository;