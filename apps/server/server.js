import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import todosRouter from "./routes/todos/index.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/api", (req, res) => {
  res.sendStatus(200);
});

app.use("/todos", todosRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Ready at http://localhost:${port}`);
});
