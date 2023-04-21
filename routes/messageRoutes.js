const express = require("express");
const messageController = require("../contollers/messageControllers");

const router = express.Router();

router.post("/message", messageController.writeMessageHandler);

module.exports = router;
