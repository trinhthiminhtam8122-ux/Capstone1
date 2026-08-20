import { BadResquestError } from '../common/helpers/exception.helper.js'
import { signAccessToken } from '../common/helpers/jwt.helper.js'
import { prisma } from '../common/prisma/connect.prisma.js'
import bcrypt from 'bcrypt'

export const authService = {
    //1. dang ky
    async register (req) {
        const { email, password, fullName, age} = req.body; 
        const existingUser = await prisma.users.findUnique({
            where: { email }
        });

        if(existingUser) {
            throw new BadResquestError("Email này đã được sử dụng, vui lòng đăng nhập!");
        }

        const hashPassword = bcrypt.hashSync(password, 10);

        const newUser = await prisma.users.create({
            data: {
                email,
                password: hashPassword,
                fullName,
                age: Number(age) || null,
                avatar: 'default-avata.png'
            }
        });

        return { id: newUser.id, email: newUser.email, fullName: newUser.fullName};
    },

    //dang nhap
    async login(req) {
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: { email },
            omit: { password: false }
        })

        if(!user){
            throw new BadResquestError("Tài khoản hoặc mật khẩu không chính xác!");
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            throw new BadResquestError("Tài khoản hoặc mật khẩu không chính xác!");
        }

        const token = signAccessToken({ userId: user.id, email: user.email});

        return { token, user: { id: user.id, email: user.email, fullName: user.fullName, avatar: user.avatar }};
    },
};