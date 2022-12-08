import database from "../database/mock-database.js";

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