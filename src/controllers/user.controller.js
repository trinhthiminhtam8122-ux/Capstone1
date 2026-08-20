import { userService } from "../services/user.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";

export const userController = {
    async getProfile(req, res, next) {
        const result = await userService.getProfile(req);
        const response = responseSuccess(result, "Lấy thông tin cá nhân thành công!");
        res.status(response.statusCode).json(response);
    }, 

    async getSavedImages(req, res, next) {
        const result = await userService.getSavedImages(req);
        const response = responseSuccess(result, "Lấy danh sách ảnh đã lưu thành công!");
        res.status(response.statusCode).json(response);
    },

    async getCreatedImages(req, res, next) {
        const result = await userService.getCreatedImages(req);
        const response = responseSuccess(result, "Lấy danh sách ảnh đã tạo thành công!");
        res.status(response.statusCode).json(response);
    },
}