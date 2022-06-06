const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

//connect to DB
dotenv.config();
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

app.use("/", authRoutes);
const port = 4000;
app.listen(port, () => console.log(`app running on port ${port}`));
