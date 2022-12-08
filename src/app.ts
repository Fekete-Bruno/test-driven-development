import express from "express";
import cors from "cors";
import { create } from "./controllers/create.controller";
import { update } from "./controllers/update.controller";
import { read, readId } from "./controllers/read.controller";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_req,res) => res.send("Connection is working!"))
    .get("/",read)
    .get("/:id",readId)
    .post("/",create)
    .put("/:id",update);
    
export default app;