import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.post("/", userController.createOrGetUser);
router.get("/", userController.createOrGetUser);
router.get("/all", userController.getUsersWithModuleCount);

export default router;
