import { Request, Response } from "express";
import httpStatus from "http-status";
import repository from "../repositories/todo.repository";


export function read(_req:Request,res:Response){
    res.status(httpStatus.OK).send(repository.findMany());
}

export function readId(req:Request,res:Response){
    const { id } = req.params
    if(isNaN(Number(id))){
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
    const data = repository.findOne(Number(id));
    if(typeof data === 'undefined'){
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
    return res.status(httpStatus.OK).send(data);
}