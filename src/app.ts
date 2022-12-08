import express from "express";
import cors from "cors";
import read from "./controllers/read.controller.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_req,res) => res.send("Connection is working!"))
    .get("/",read);

    
export default app;