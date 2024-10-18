import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app = express();
app.use(express.json());

dotenv.config();

mongoose
    .connect(process.env.MONGO_URl)
    .then(() => {
        console.log("MongoDb is connected");
    }).catch(err => {
        console.log(err);
    });

app.listen(8080, () => {
    console.log(`app is listening on port 8080`)
})

app.use("/api/user", userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});