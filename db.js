const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ashokmanjhu:ashokmanjhu@cluster0.m8gxypg.mongodb.net/ChatManager?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB connection successful!"));
