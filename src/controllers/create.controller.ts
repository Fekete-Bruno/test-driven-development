import { Request, Response } from "express";
import httpStatus from "http-status";
import { To_do_Creator } from "../protocols";
import createService from "../services/create.service";

export function create(req:Request,res:Response){
    const todo = req.body as To_do_Creator;
    
    try {
        const response = createService.createOne(todo);
        return res.status(httpStatus.CREATED).send(response);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}