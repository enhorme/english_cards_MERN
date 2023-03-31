import express from "express";
import { moduleController } from "../controllers/moduleController.js";
const router = express.Router();

router.post("/", moduleController.createModule);
router.get("/", moduleController.getModules);
router.get("/:id", moduleController.getModuleById);
router.put("/:id", moduleController.updateModule);
router.patch("/:id", moduleController.updateModule);
router.delete("/:id", moduleController.deleteModule);

export default router;
