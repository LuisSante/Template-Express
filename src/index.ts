import express from "express";
import RouterGeneral from "./routes/products";

const app = express();

app.use("/api/v1/diaries", RouterGeneral);

export default app;
