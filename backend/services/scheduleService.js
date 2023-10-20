import { ScheduleModel } from "../models/Schedule.js";
import { UserModel } from "../models/User.js";
import { addNotification } from "./notificationService.js";

export const createMeeting = async (userId, meetingData) => {
  try {
    const start = new Date(meetingData.start);
    const end = new Date(meetingData.end);
    const existingMeeting = await ScheduleModel.findOne({
      userId: userId,
      $or: [
        {
          $and: [
            { start: { $lte: start } },
            { end: { $gt: start } },
          ],
        },
        {
          $and: [
            { start: { $lt: end } },
            { end: { $gte: end } },
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
    const type = "meetingRequest";
    await addNotification(meeting.userId, null, type, null, null, meeting._id);
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

export const deleteMeeting = async (meetingId, userId) => {
  try {
    const meeting = await ScheduleModel.findOneAndDelete({
      _id: meetingId,
      userId: userId,
    });
    if (!meeting) {
      return {
        status: 404,
        message: "Meeting not found with the provided ID.",
      };
    }

    return {
      status: 200,
      message: "Meeting deleted successfully",
      data: meeting,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while deleting the meeting.",
    };
  }
};

export const acceptRequestById = async (meetingId, requestId) => {
  try {
    const meeting = await ScheduleModel.findById(meetingId);
    if (!meeting) {
      return {
        status: 404,
        message: "Meeting not found with the provided ID.",
      };
    }
    const requestToAccept = meeting.requestedBy.find(
      (request) => request._id.toString() === requestId
    );
    if (!requestToAccept) {
      return {
        status: 404,
        message: "Request not found with the provided ID for this meeting.",
      };
    }
    meeting.bookedBy = {
      name: requestToAccept.name,
      companyName: requestToAccept.companyName,
      email: requestToAccept.email,
      phone: requestToAccept.phone,
      description: requestToAccept.description,
      oneLink: requestToAccept.oneLink,
    };
    await meeting.save();
    return {
      status: 200,
      message: "Request accepted successfully",
      data: meeting,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while accepting the request.",
    };
  }
};
