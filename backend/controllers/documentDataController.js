const documentService = require('../services/documentDataService');

// Controller function to get a list of uploaded files and their names
const getDocumentList = (req, res) => {
  const files = documentService.getDocumentList();
  res.status(200).json({ files });
};

module.exports = {
  getDocumentList,
};
