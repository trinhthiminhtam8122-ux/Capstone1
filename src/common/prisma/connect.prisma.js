import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from './generated/client/index.js';
import { DATABASE_URL } from '../constant/app.constant.js';

const url = new URL(DATABASE_URL);

// Cấu hình adapter kết nối thông qua MariaDb/MySQL giống nhau
const adapter = new PrismaMariaDb({
    host: url.hostname,
    port: parseInt(url.port) || '3039',
    user: url.username,
    password: url.password,
    database: url.pathname.substring(1), // Loại bỏ dấu '/' ở đầu
    connectionLimit: 5,
});

const prisma = new PrismaClient({
    adapter,
    omit: {
        users: {
            password: true,
        }
    }
});

try {
  await prisma.$queryRaw`SELECT 1+1 AS result`;
  console.log("[PRISMA]Connection has been established successfully.");
} catch (error) {
  console.error("[PRISMA]Unable to connect to the database:", error);
}

export { prisma };