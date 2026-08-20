import express from 'express';
import 'dotenv/config';
import { appError } from './src/common/helpers/appError.helper.js'
import { prisma } from './src/common/prisma/connect.prisma.js';
import rootRouter from './src/routers/root.router.js';

const app = express();

app.use(express.json());

app.get('/server', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.use("/api", rootRouter);

app.use(appError);

const PORT = process.env.PORT || 3039;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})