import mongoose from "mongoose";

// connect to mongoDB
export const connectDB = async () => {
  try {
    const MongoDB_URI = process.env.MongoDB_URI;

    if (!MongoDB_URI) {
      throw new Error("MONGODB_URI not set");
    }

    await mongoose.connect(MongoDB_URI);
    console.log("✅ Connected to MongoDB");

  } catch (error) {
    console.log("❌ Database connection failed:", error.message);
    // process.exit(1); // stop server if DB fails
  }
};
