import "dotenv/config";
import express from "express";
import { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import todosRouter from "./routes/todos/index.js";

const app = express();

console.log();

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
