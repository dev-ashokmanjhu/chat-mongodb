const Message = require("../models/message");

exports.writeMessageHandler = async (req, res) => {
  const message = await new Message(req.body);
  try {
    await message.save();
    res.send(message);
  } catch (error) {
    res.status(404).send(error);
  }
};
