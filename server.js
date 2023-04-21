const express = require("express");
const db = require("./db");
const Chat = require("./models/chat");
const Message = require("./models/message");
const chatRouter = require("./routes/chatRoutes");
const messageRouter = require("./routes/messageRoutes");

const app = express();
app.use(express.json());

const Port = process.env.PORT || 3000;

app.use("/api/v1", chatRouter);
app.use("/api/v1", messageRouter);

const query = { connection: { $gte: "5000" } };

app.delete("/api/v1/chatandmessages", async (req, res) => {
  const chat = await Chat.deleteMany(query).then(() => {
    return Message.deleteMany(query);
  });
  //   const message = await Message.deleteMany(query);
  res.send(chat);
});

app.listen(Port, () => {
  console.log(`Server is Running on Port :${Port}`);
});
