import {
  createCommunity,
  getCommunityById,
  getAllCommunitiesByUserId,
  getCommunitySettings,
  updateCommunity,
} from "../services/communityService.js";

export const createCommunityController = async (req, res) => {
  try {
    const response = await createCommunity(req.body);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while creating communities.",
    });
  }
};

export const getCommunityByIdController = async (req, res) => {
  try {
    const { communityId } = req.params;
    const response = await getCommunityById(communityId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting community.",
    });
  }
};

export const getAllCommunitiesByUserIdController = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getAllCommunitiesByUserId(userId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting community.",
    });
  }
};

export const getCommunitySettingsController = async (req, res) => {
  try {
    const { communityId } = req.params;
    const response = await getCommunitySettings(communityId);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while getting community settings.",
    });
  }
};

export const updateCommunityController = async (req, res) => {
  try {
    const { communityId } = req.params;
    const updatedData = req.body;
    const response = await updateCommunity(communityId, updatedData);
    return res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      status: 500,
      message: "An error occurred while updating the community.",
    });
  }
};