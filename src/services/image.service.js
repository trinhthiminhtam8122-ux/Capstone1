import { prisma } from '../common/prisma/connect.prisma.js';
import { ForbiddenError, NotFoundError } from '../common/helpers/exception.helper.js';

export const imageService = {
    async getImages(req) {
        const { search } = req.query;

        const images = await prisma.images.findMany({
            where: search ? {
                title: {
                    contains: search, 
                }
            } : undefined
        });
        return images;
    },

    async getImageDetail(req) {
        const imageId = Number(req.params.id);
        const image = await prisma.images.findUnique({
            where: { id: imageId },
            include: {
                Users: {
                    select: {
                        id: true,
                        email: true,
                        fullName: true,
                        avatar: true
                    }
                }
            }
        });

        if(!image) {
            throw new NotFoundError("Hình ảnh không tồn tại!");
        }
        return image;
    },

    async getImageComments(req) {
        const imageId = Number(req.params.id);

        const comments = await prisma.comments.findMany({
            where: { imageId },
            include: {
                Users: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true
                    }
                }
            },
            orderBy: {
                commentDate: 'desc'
            }
        });
        return comments;
    },

    async checkImageSaved(req) {
        const imageId = Number(req.params.id);
        const userId = req.user.id;
        console.log("[DEBUG checkImageSaved] userId =", userId, "imageId =", imageId, "types =", typeof userId, typeof imageId);

        const savedRecord = await prisma.savedImages.findUnique({
            where: {
                userId_imageId: {
                    userId,
                    imageId
                }
            }
        });
        console.log("[DEBUG checkImageSaved] savedRecord =", JSON.stringify(savedRecord));

        return { isSaved: !!savedRecord };
    },

    async createComment(req) {
        const imageId = Number(req.params.id);
        const userId = req.user.id;
        const { content } = req.body;

        if (!content || content.trim() === "") {
            throw new Error("Nội dung bình luận không được để trống!");
        }

        const imageExist = await prisma.images.findUnique({
            where: { id: imageId } 
        })

        if(!imageExist) {
            throw new NotFoundError("Hình ảnh không tồn tại để bình luận!");
        }

        const newComment = await prisma.comments.create({
            data: {
                userId,
                imageId,
                content
            },
            include: {
                Users: {
                    select: {
                        id: true,
                        fullName: true,
                        avatar: true
                    }
                }
            }
        });
        return newComment;
    },

    async deleteImage(req){
        const imageId = Number(req.params.id);
        const userId = req.user.id;

        const image = await prisma.images.findUnique({
            where: {
                id: imageId
            }
        });

        if (!image) {
            throw new NotFoundError("Hình ảnh không tồn tại để xóa!");
        }

        if (image.userId !== userId) {
            throw new ForbiddenError("Bạn không có quyền xóa hình ảnh này (chỉ chủ sở hữu mới có quyền xóa)!");
        }

        await prisma.images.delete({
            where: {
                id: imageId
            }
        })

        return { message: "Xóa hình ảnh thành công!"};
    }

}