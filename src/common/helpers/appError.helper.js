import { responseError } from './response.helper.js';
import { statusCodes } from './status-code.helper.js';

export const appError = ( err, req, res, next) => {
    // Lấy status code mặc định là 500 nếu lỗi không được định nghĩa mã lỗi
  const statusCode = err.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
  const response = responseError(err.message, statusCode, err.stack);
  res.status(response.statusCode).json(response);
}