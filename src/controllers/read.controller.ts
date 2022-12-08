import { Request, Response } from "express";
import httpStatus from "http-status";
import readService from "../services/read.service";

export function read(_req:Request,res:Response){
    try {
        const response = readService.getAll();
        return res.status(httpStatus.OK).send(response);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export function readId(req:Request,res:Response){
    const { id } = req.params
    try {
        const response = readService.getById(Number(id));
        return res.status(httpStatus.OK).send(response);
    } catch (error) {
        return res.sendStatus(httpStatus.NOT_FOUND);
    }
}