//Packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

//Utils
import connectDB from './confg/db.js';
import materialRoutes from './routes/materialRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

//Mongoose Setup
const PORT = process.env.PORT || 6001;
connectDB();

//Configurations
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use('/api/materials', materialRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname + '/uploads')));

//Start Listening
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
