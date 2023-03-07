import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRouter from './routes/user.routes.js';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

export { app, server };
