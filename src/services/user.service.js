import { prisma } from "../common/prisma/connect.prisma.js";

export const userService = {
  async getProfile(req) {
    return req.user;
  },

  async getSavedImages(req) {
    const userId = req.user.id;

    const saved = await prisma.savedImages.findMany({
        where: { userId },
        include: {
            Images: true
        }
    });

    return saved.map(item => item.Images);
  },

  async getCreatedImages(req) {
    const userId = req.user.id;

    const created = await prisma.images.findMany({
        where: { userId }
    });

    return created;
  }
};
