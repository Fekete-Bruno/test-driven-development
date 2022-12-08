import { Request, Response } from "express";
import database from "../database/mock-database";
import httpStatus from "http-status";

export default function read(_req:Request,res:Response){
    res.status(httpStatus.OK).send(database);
}