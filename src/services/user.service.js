import { prisma } from "../common/prisma/connect.prisma.js";

export const userService = {
  async getProfile(req) {
    return req.user;
  },

  async getSavedImages(req) {
    const userId = req.user.id;
    console.log("[DEBUG getSavedImages] req.user =", JSON.stringify(req.user));
    console.log("[DEBUG getSavedImages] userId =", userId, "type =", typeof userId);

    const saved = await prisma.savedImages.findMany({
        where: { userId },
        include: {
            Images: true
        }
    });
    console.log("[DEBUG getSavedImages] saved result =", JSON.stringify(saved));

    return saved.map(item => item.Images);
  },

  async getCreatedImages(req) {
    const userId = req.user.id;
    console.log("[DEBUG getCreatedImages] userId =", userId, "type =", typeof userId);

    const created = await prisma.images.findMany({
        where: { userId }
    });
    console.log("[DEBUG getCreatedImages] created result =", JSON.stringify(created));

    return created;
  }
};
