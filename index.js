import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
const app = express();

app.use(cors());
app.use(express.json());
// dotenv port
dotenv.config();
const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI;

// connect to database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(MongoDBURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
connectToDatabase();

//definnig routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

//routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, () => {
  console.log(` app is listening on port ${PORT}`);
});
