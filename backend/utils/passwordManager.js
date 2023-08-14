import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (inputPassword) => {
  try {
    return await bcrypt.hash(inputPassword.toString(), saltRounds);
  } catch (error) {
    throw new Error("Error hashing password");
  }
};

export const comparePassword = async (inputPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword.toString(), hashedPassword);
  } catch (error) {
    throw new Error("Invalid Password");
  }
};
