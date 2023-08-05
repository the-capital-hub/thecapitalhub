const crypto = require("crypto");

const generateSecretKey = () => {
  const lengthInBytes = 32;
  return crypto.randomBytes(lengthInBytes).toString("hex");
};

const secretKey = generateSecretKey();

module.exports = {
  secretKey,
};