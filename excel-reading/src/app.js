import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes/index.js';
import connectDB from './config/db.js';
import requestLogger from './middlewares/requestLogger.js';
import responseLogger from './middlewares/responseLogger.js';
import errorHandler from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const app = express();

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(requestLogger);
app.use(responseLogger);

app.use('/api', routes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

export default app;
