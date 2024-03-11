import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    // console.log(DB_NAME);
    // console.log(process.env.MONGODB_URI);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED || DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
    } catch (error) {
        console.log("There is a connection error:");
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;