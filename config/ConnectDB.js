import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const ConnectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URL, {
            family: 4
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        if (error.message.includes("ECONNREFUSED")) {
            console.error("Tip: Check your IP whitelist in MongoDB Atlas and your internet connection.");
        }
    }
}

export default ConnectDB;