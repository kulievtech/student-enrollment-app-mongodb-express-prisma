import express from "express";
import { router } from "./routes/routes.js";
import { GlobalError } from "./errors/global-error.js";

import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use("/students", router);
app.use(GlobalError.handle);

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
