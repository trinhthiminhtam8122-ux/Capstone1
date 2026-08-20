import { authService } from "../services/auth.service.js";
import { responseSuccess } from "../common/helpers/response.helper.js";
import { statusCodes } from "../common/helpers/status-code.helper.js";

export const authController = {
    async register(req, res, next) {
        const result = await authService.register(req);
        const response = responseSuccess( result, "Đăng ký tài khoản thành công!", statusCodes.OK);
        res.status(response.statusCode).json(response);
    },

    async login(req, res, next) {
        const result = await authService.login(req);
        const responce = responseSuccess( result, "Đăng nhập thành công!", statusCodes.OK);
        res.status(responce.statusCode).json(responce);
    }
}