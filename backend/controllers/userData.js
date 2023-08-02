const getUsersService = require('../services/userService');
const { registerUserService } = require('../services/userService');
const getUsersController = async (req, res, next) => {
  try {
    const getUser = await getUsersService.getUsersService();
    return res.status(200).json(getUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
};

const registerUserController = async (req, res, next) => {
  console.log("req.body",req.body)
  try {
    const { firstName, lastName, email, password } = req.body;

    // Perform input validation here if needed

    // Call the service to save the user
    const newUser = await registerUserService({ firstName, lastName, email, password });

    // If the user is saved successfully, send a custom success response
    return res.status(201).json({ message: 'User added successfully' });
  } catch (error) {
    console.error(error);
    if (error.message === 'User with this email already exists') {
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    return res.status(500).json({ error: 'Failed to create the user' });
  }
};


module.exports = {
  getUsersController,registerUserController
};
