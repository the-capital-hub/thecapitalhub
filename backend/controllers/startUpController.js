import {
  createStartup,
  getOnePager,
  updateOnePager,
  updateStartUpData,
  investNowService,
  getStartupByFounderId,
  getAllStartups,
  getStartupsBySearch,
} from "../services/startUpService.js";
import { getStartUpData } from "../services/userService.js";

//create startup
export const createStartUpController = async (req, res) => {
  try {
    const response = await createStartup(req.body);
    res.status(response.status).send(response);
    return response
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while creating the company.",
    });
  }
};

// Phase 2
export const getOnePagerController = async (req, res) => {
  const { oneLink } = req.params;
  try {
    const response = await getOnePager(oneLink);
    res.status(response.status).send(response);
  } catch (err) {
    console.error("Error getting Company Details:", err);
    res.status(500).send({
      status: 500,
      message: "An error occurred while getting company details.",
    });
  }
};

export const startUpData = async (req, res) => {
  const { userId } = req.params;
  try {
    const { status, ...data } = await getStartUpData(userId);
    res.status(status).json(data);
  } catch (error) {
    console.error("Error fetching startUp data: ", error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while fetching start up details.",
    });
  }
};

// Edit start up OneLink
export const editStartUpOneLink = async (req, res) => {
  try {
    const { oneLink, userId } = req.body;
    const { status, ...data } = await updateStartUpData(userId, { oneLink });
    res
      .status(status)
      .send({ message: data.message, data: { oneLink: data.data.oneLink } });
  } catch (error) {
    console.log("Error updating OneLink: ", error);
    res.status(500).send({
      error: true,
      message: "An error occured while changing OneLink",
    });
  }
};

// Edit introductory message
export const editStartUpIntroMessage = async (req, res) => {
  try {
    const { introductoryMessage } = req.body;
    const { status, ...data } = await updateStartUpData(req.userId, introductoryMessage);
    res.status(status).send({
      message: data.message,
      data: { introductoryMessage: data.data.introductoryMessage },
    });
  } catch (error) {
    console.log("Error updating Introductory message: ", error);
    res.status(500).send({
      error: true,
      message: "An error occured while changing Introductory message",
    });
  }
};

// Edit One Page data for One Link
export const editOnePager = async (req, res) => {
  try {
    const { status, ...data } = await updateOnePager(req.body);
    res.status(status).send(data);
  } catch (error) {
    console.log("Error updating One Pager Data: ", error);
    res.status(500).send({
      error: true,
      message: "An error occured while changing One Pager Data",
    });
  }
};

export const investNowController = async (req, res) => {
  try {
    const { fromUserName, fromUserEmail, fromUserMobile, toUserId } = req.body;

    const response = await investNowService({
      fromUserName,
      fromUserEmail,
      fromUserMobile,
      toUserId,
    });

    res.status(response.status).send(response);
  } catch (error) {
    console.error("Error sending investment proposal:", error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while sending the investment proposal.",
    });
  }
};

export const getStartupByFounderIdController = async (req, res) => {
  const { founderId } = req.params;
  try {
    const response = await getStartupByFounderId(founderId);
    res.status(response.status).send(response);
  } catch (err) {
    console.error("Error getting company:", err);
    res.status(500).send({
      status: 500,
      message: "An error occurred while getting company.",
    });
  }
};

// get all startups
export const getAllStartupsController = async (req, res) => {
  try {
    const response = await getAllStartups();
    res.status(response.status).send(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while fetching all startups.",
    });
  }
};


// get startup by search
export const getStartupsBySearchController = async (req, res) => {
  try {
    const { searchQuery } = req.params;
    const response = await getStartupsBySearch(searchQuery);
    res.status(response.status).send(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({
      status: 500,
      message: "An error occurred while fetching startups.",
    });
  }
};