import express from "express";
import cardController from "../controllers/cardController.js";

const router = express.Router();

router.post("/", cardController.createCard);
router.get("/:moduleId", cardController.getCardsByModule);
router.patch("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

export default router;
