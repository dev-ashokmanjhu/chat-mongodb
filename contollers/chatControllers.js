const Chat = require("../models/chat");
const Message = require("../models/message");

exports.createChatRoomHandler = async (req, res) => {
  const chatRoom = await new Chat(req.body);
  try {
    await chatRoom.save();
    res.send(chatRoom);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

exports.deletechatwithMessage = async (req, res) => {
  const chats = await Chat.aggregate([
    {
      $lookup: {
        from: "messages",
        localField: "connection",
        foreignField: "connection",
        as: "messages",
      },
    },
    { $match: { connection: { $gt: "5000" } } },
  ]);
  // chats.pull();
  //   await Chat.deleteMany(chats);
  //   await Chat.deleteMany({ connection: { $gt: "5000" } });
  res.send(chats);
};
