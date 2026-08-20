import { UnauthorizedError } from '../helpers/exception.helper.js';
import { verifyAccessToken } from '../helpers/jwt.helper.js';
import { prisma } from '../prisma/connect.prisma.js';

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthorizedError("Vui lòng đăng nhập để thực hiện hành động này!");
    }

    const accessToken = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(accessToken);

    const userExist = await prisma.users.findUnique({
        where: {
            id: decoded.userId,
        },
    });

    if (!userExist) {
        throw new UnauthorizedError("Tài khoản không hợp lệ hoặc đã bị xoá!")
    }

    req.user = userExist;

    next();
};
