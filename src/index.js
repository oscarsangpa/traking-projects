import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { userRouter } from './routes/user.routes.js';
import { projectRouter } from './routes/project.routes.js'
import { taskRouter } from './routes/task.routes.js';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter)
app.use('/api/tasks', taskRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
