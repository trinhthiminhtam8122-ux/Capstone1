import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../constant/app.constant.js';

export const signAccessToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "10d"});
}

export const verifyAccessToken = ( payload ) => {
    return jwt.verify(payload, JWT_SECRET_KEY);
}