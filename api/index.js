import Express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'

const app = Express();

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