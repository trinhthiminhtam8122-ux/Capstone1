import express from "express";
import { userController } from "../controllers/user.controller.js";
import { authMiddleware } from "../common/middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.get("/profile", authMiddleware, userController.getProfile);
userRouter.get("/saved", authMiddleware, userController.getSavedImages);
userRouter.get("/created", authMiddleware, userController.getCreatedImages);

export default userRouter;