import { Router } from "express";
import { controller } from "../controllers/controller.js";

const router = Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.patch("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

export { router };
