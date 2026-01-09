import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const onlineUsers = new Map();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    for (let [userId, sockId] of onlineUsers.entries()) {
      if (sockId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }
    io.emit("online-users", Array.from(onlineUsers.keys()));
    console.log("User disconnected:", socket.id);
  });
  socket.on("user-online", (userId) => {
    onlineUsers.set(userId, socket.id);
    io.emit("online-users", Array.from(onlineUsers.keys()));
  });
});
export { io };
server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
