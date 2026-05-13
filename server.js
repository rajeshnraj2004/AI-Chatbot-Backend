import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/ConnectDB.js";
import chatRoute from "./routes/chatRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',chatRoute);

ConnectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});