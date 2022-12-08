import { Request, Response } from "express";
import httpStatus from "http-status";
import repository from "../repositories/todo.repository.js";

export default function read(_req:Request,res:Response){
    res.status(httpStatus.OK).send(repository.findMany());
}