import crypto from "crypto";

const generateSecretKey = () => {
  const lengthInBytes = 32;
  return crypto.randomBytes(lengthInBytes).toString("hex");
};

export const secretKey = generateSecretKey();
