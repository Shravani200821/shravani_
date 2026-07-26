require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRouter = require("./router/User");
const complaintRouters = require("./router/complaint");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users",userRouter);
app.use("/api/complaints",complaintRouters);

app.get("/api/health", (req, res) => {
    res.json({
        status: "backend server is running"
    });

    });
   const PORT = process.env.PORT || 5000;

   app.listen(PORT, () => {
    console.log(`Server running on port $ {PORT}`);
   });