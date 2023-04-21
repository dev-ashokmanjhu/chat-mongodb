const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    connection: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// chatSchema.virtual("Message", {
//   ref: "Message",
//   localField: "connection",
//   foreignField: "connection",
// });

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
