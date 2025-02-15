import mongoose from "mongoose";
const dburl = "mongodb://127.0.0.1:27017/HBDB";

export default async function database() {
    try {
        mongoose.set('bufferCommands', false);
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        });
        console.log("Database connected");
    } catch (err) {
        console.log("Database connection error:", err);
    }
}
