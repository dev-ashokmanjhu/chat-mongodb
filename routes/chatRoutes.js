const express = require("express");
const chatController = require("../contollers/chatControllers");

const router = express.Router();

router.post("/chat", chatController.createChatRoomHandler);
router.get("/chat", chatController.deletechatwithMessage);

module.exports = router;
