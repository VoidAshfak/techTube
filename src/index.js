import dotenv from "dotenv" //using dotenv as early as possible to load the env variables
import connectDB from "./db/index.js"
import { app } from "./app.js"


//configuring the path (where to pick the environment variables)
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log(`MONGODB CONNECTION FAILED!!`);
    console.error(error);
})