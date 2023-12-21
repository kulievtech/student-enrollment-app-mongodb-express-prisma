import express from "express";
import { router } from "./routes/routes.js";
import { GlobalError } from "./errors/global-error.js";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/students", router);
app.use(GlobalError.handle);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
