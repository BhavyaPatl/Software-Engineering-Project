import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";

dotenv.config();
const app = express();

const port = 8000;

const USERNAME=process.env.USERNAME;
const PASSWORD=process.env.PASSWORD;    
Connection(USERNAME,PASSWORD);

app.listen(port, () => console.log('Server is running on port ' + port));
DefaultData();