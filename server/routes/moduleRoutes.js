import express from "express";
import cardController from "../controllers/cardController.js";
import moduleController from "../controllers/moduleController.js";
const router = express.Router();

router.get("/", moduleController.getAllModules);
router.get("/:id", moduleController.getModuleById);
router.get("/user/:userId", moduleController.getModulesByUserId);

router.post("/:id/cards", cardController.createCard);
router.post("/", moduleController.createModule);

router.put("/:id", moduleController.updateModule);
router.delete("/", moduleController.deleteModule);

export default router;
