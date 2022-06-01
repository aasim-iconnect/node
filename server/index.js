const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//cookies
const cookieParser = require("cookie-parser");
//import routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
//CORS
const cors = require("cors");

dotenv.config();
//connect to DB
mongoose.connect(process.env.DB_url, () => console.log("connected to DB"));

//Middleware
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//Routes middleware
app.use("/api/users", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(4000, () => console.log("app running on port 400"));
