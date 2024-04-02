import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


// CORS Origin Defined
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// To accept json data
app.use(express.json({
    limit: "16kb"
}));

// To accept encoded URL data
app.use(express.urlencoded({
    extended: true, // for object inside object
    limit: "16kb"
}));


app.use(express.static("public")); // use public folder for files

app.use(cookieParser()) // for accessing user's browser cookie



//ROUTES
import userRouter from "./routes/user.routes.js"


//ROUTES DECLARATION
app.use("/api/v1/users", userRouter)

app.get("/", (req, res) => {
    res.send("This is techtube...")
})


export { 
    app
};



// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";

// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())


// export { app }