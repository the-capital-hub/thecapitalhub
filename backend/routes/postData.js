const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");
const authenticateToken = require("../middlewares/authenticateToken");

// Use express.raw middleware to access the raw body of the request
router.post("/post", express.raw({ type: 'image/*|video/*' }), postController.postController);

module.exports = router;
