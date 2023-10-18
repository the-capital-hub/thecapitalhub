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
    const formattedMeetings = meetings.map((meeting) => {
      const startDateTime = new Date(meeting.startDateTime);
      const endDateTime = new Date(meeting.endDateTime);

      const formattedMeeting = {
        startYear: startDateTime.getFullYear(),
        startMonth: startDateTime.getMonth() + 1,
        startDay: startDateTime.getDate(),
        startHour: startDateTime.getHours(),
        startMin: startDateTime.getMinutes(),
        endYear: endDateTime.getFullYear(),
        endMonth: endDateTime.getMonth() + 1,
        endDay: endDateTime.getDate(),
        endHour: endDateTime.getHours(),
        endMin: endDateTime.getMinutes(),
        title: meeting.title,
        bookedBy: meeting.bookedBy,
        requestedBy: meeting.requestedBy,
      };
      return formattedMeeting;
    });

    return {
      status: 200,
      message: "Meetings retrieved successfully",
      data: formattedMeetings,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while retrieving meetings.",
    };
  }
};



