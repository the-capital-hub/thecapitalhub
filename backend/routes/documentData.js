const express = require("express");
const router = express.Router();

const documentController = require("../controllers/documentDataController");

router.get('/getDocument', documentController.getDocumentList);
module.exports = router;
