import { ScheduleModel } from "../models/Schedule.js";
import { UserModel } from "../models/User.js";

export const createMeeting = async (userId, meetingData) => {
  try {
    const startDateTime = new Date(meetingData.startDateTime);
    const endDateTime = new Date(meetingData.endDateTime);
    const existingMeeting = await ScheduleModel.findOne({
      userId: userId,
      $or: [
        {
          $and: [
            { startDateTime: { $lte: startDateTime } },
            { endDateTime: { $gt: startDateTime } },
          ],
        },
        {
          $and: [
            { startDateTime: { $lt: endDateTime } },
            { endDateTime: { $gte: endDateTime } },
          ],
        },
      ],
    });
    if (existingMeeting) {
      return {
        status: 409,
        message: "Time is overlapping with existing meeting .",
        data: existingMeeting,
      };
    }
    const meeting = new ScheduleModel({
      ...meetingData,
      userId: userId,
    });
    await meeting.save();

    return {
      status: 200,
      message: "Meeting Created",
      data: meeting,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while creating a meeting.",
    };
  }
};

export const getAllMeetings = async (oneLinkId) => {
  try {
    const user = await UserModel.findOne({ oneLinkId });

    if (!user) {
      return {
        status: 404,
        message: "User not found with the provided oneLinkId.",
      };
    }

    const meetings = await ScheduleModel.find({ userId: user._id });

    return {
      status: 200,
      message: "Meetings retrieved successfully",
      data: meetings,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while retrieving meetings.",
    };
  }
};

export const requestBookingSlotById = async (meetingId, requestData) => {
  try {
    const meeting = await ScheduleModel.findById(meetingId);
    if (!meeting) {
      return {
        status: 404,
        message: "Meeting not found with the provided ID.",
      };
    }
    meeting.requestedBy.push(requestData);
    await meeting.save();
    return {
      status: 200,
      message: "Booking request added successfully",
      data: meeting,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while adding the booking request.",
    };
  }
};