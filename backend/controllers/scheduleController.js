import {
  createMeeting,
  getAllMeetings,
  requestBookingSlotById,
} from "../services/scheduleService.js";

export const createMeetingController = async (req, res) => {
  try {
    const userId = req.userId;
    const response = await createMeeting(userId, req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred while creating meeting.",
    });
  }
}

export const getAllMeetingsController = async (req, res) => {
  try {
    const { oneLinkId } = req.params;
    const response = await getAllMeetings(oneLinkId);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred while retrieving meetings.",
    });
  }
}

export const requestBookingSlotController = async (req, res) => {
  try {
    const { meetingId } = req.params;
    const response = await requestBookingSlotById(meetingId, req.body);
    res.status(response.status).send(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "An error occurred while requesting the booking slot.",
    });
  }
}



