import express, { json } from "express";
import { router } from "./routes/main";

const app = express();

app.use(json());

app.use("/", router);
app.use("*", (req, res) => res.status(404).json({ error: "resource not found" }))

export default app;