import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import userRouter from "./routes/userRouter.js";
import searchRouter from "./routes/searchRouter.js";
import checkoutRouter from "./routes/checkoutRouter.js";
import refreshTokenRouter from "./routes/refreshTokenRouter.js";
import logoutRouter from "./routes/logoutRouter.js";
import restaurantsRouter from "./routes/restaurantsRouter.js";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

try {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
  console.log("Database is connected!");
} catch (error) {
  console.log("Error connecting to the database", error);
}

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://deliveats-food-delivery-app.onrender.com"],
    credentials: true,
  },
});

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://deliveats-food-delivery-app.onrender.com"],
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use("/users", userRouter);
app.use("/search", searchRouter);
app.use("/create-checkout-session", checkoutRouter);
// app.use("/saveBasketAndDelivery");
app.use("/refresh-token", refreshTokenRouter);
app.use("/restaurants", restaurantsRouter);
app.use("/logout", logoutRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

const port = process.env.PORT || 5002;
server.listen(port, () => console.log(`Server is running on port ${port}`));

app.use(globalErrorHandler);

// Handle Socket.IO connections
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRestaurantRoom", (restaurantId) => {
    socket.join(`restaurant_${restaurantId}`);
  });

  socket.on("joinOrderRoom", (orderId) => {
    socket.join(`order_${orderId}`);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Export the io instance for use in other modules
export { io };
