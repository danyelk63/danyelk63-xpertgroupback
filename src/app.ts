import connectDB from "./config/database";
import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import catRouter from "./routes/catRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import { corsMiddleware } from "./middlewares/corsHandler";
import { authMiddleware } from "./middlewares/authHandler";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(corsMiddleware);
app.use(authMiddleware);
app.use(errorHandler);

// routes
app.use("/api/users", userRouter);
app.use("/api/cats", catRouter);

// start server
const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
