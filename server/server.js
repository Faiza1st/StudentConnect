import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary';

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import notificationRoutes from './routes/notificationRoutes.js'

import mongoDb from './db/mongodb.js'

dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.Cloud_name, 
    api_key: process.env.Cloud_API_key, 
    api_secret: process.env.Cloud_API_secret 
  });

const app = express();
const PORT = process.env.PORT || 4000;
app.use(cookieParser()); 
app.use(express.urlencoded({ extended :true}));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notification", notificationRoutes);





app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    mongoDb();
})