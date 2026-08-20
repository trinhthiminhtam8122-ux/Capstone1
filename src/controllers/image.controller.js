import { imageService } from "../services/image.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const imageController = {
    async getImages(req, res, next) {
        const result = await imageService.getImages(req);
        const response = responseSuccess(result, "Lấy danh sách ảnh thành công!");
        res.status(response.statusCode).json(response);
    },

    async getImageDetail (req, res, next) {
        const result = await imageService.getImageDetail(req);
        const response = responseSuccess(result, "Lấy chi tiết ảnh thành công!");
        res.status(response.statusCode).json(response);
    },

    async getImageComment (req, res, next) {
        const result = await imageService.getImageComments(req);
        const response = responseSuccess(result, "Lấy bình luận thành công!");
        res.status(response.statusCode).json(response);
    },

    async checkImageSaved (req, res, next) {
        const result = await imageService.checkImageSaved(req);
        const response = responseSuccess(result, "Kiểm tra trạng thái lưu ảnh thành công!");
        res.status(response.statusCode).json(response);
    },

    async createComment (req, res, next) {
        const result = await imageService.createComment(req);
        const response = responseSuccess(result, "Đăng bình luận thành công!");
        res.status(response.statusCode).json(response);
    },

    async deleteImage (req, res, next) {
        const result = await imageService.deleteImage(req);
        const response = responseSuccess("Xóa ảnh thành công!");
        res.status(response.statusCode).json(response);
    }
}