import express, { Request, Response } from "express";
import machineRouters from "./src/routers/machineRouters";

const app = express();
const port = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/machine-health", machineRouters);

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});
