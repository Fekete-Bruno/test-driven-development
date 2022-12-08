import { Request, Response } from "express";
import httpStatus from "http-status";
import { To_do_Creator } from "../protocols";
import updateService from "../services/update.service";

export function update(req:Request,res:Response){
    const todo = req.body as To_do_Creator;
    const { id } = req.params;
    
    try {
        const response = updateService.updateOne(todo,Number(id));
        return res.status(httpStatus.CREATED).send(response);
    } catch (error) {
        if(error.message==="NotFound"){
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}