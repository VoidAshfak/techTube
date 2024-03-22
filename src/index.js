import dotenv from "dotenv" //using dotenv as early as possible to load the env variables
import connectDB from "./db/index.js"


//configuring the path (where to pick the environment variables)
dotenv.config({
    path: './env'
})



connectDB()