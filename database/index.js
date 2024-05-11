import mongoose from "mongoose";
import { config } from 'dotenv';
config({path: "./config.env"});
// require("dotenv").config();
// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}