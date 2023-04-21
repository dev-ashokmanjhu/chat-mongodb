const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    connection: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = new mongoose.model("Message", messageSchema);

module.exports = Message;
