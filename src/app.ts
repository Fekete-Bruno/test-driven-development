import express from "express";
import cors from "cors";
import { read, readId } from "./controllers/read.controller";
import { create } from "./controllers/create.controller";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_req,res) => res.send("Connection is working!"))
    .get("/",read)
    .get("/:id",readId)
    .post("/",create);
    
export default app;