import express from 'express'
import { imageController } from '../controllers/image.controller.js'
import { authMiddleware } from '../common/middleware/auth.middleware.js'

const imageRouter = express.Router();

imageRouter.get("/", imageController.getImages);
imageRouter.get("/:id", imageController.getImageDetail);
imageRouter.get("/:id/comments", imageController.getImageComment);
imageRouter.get("/:id/check-save", authMiddleware, imageController.checkImageSaved);
imageRouter.post("/:id/comments", authMiddleware, imageController.createComment);
imageRouter.delete("/:id", authMiddleware, imageController.deleteImage);

export default imageRouter;