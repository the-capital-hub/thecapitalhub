import { Schema, model } from "mongoose";

const scheduleSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    startDateTime: {
      type: Date,
    },
    endDateTime: {
      type: Date,
    },
    title: {
      type: String,
    },
    bookedBy: {
      type: String,
    },
    requestedBy: [
      {
        name: {
          type: String,
        },
        companyName: {
          type: String,
        },
        email: {
          type: String,
        },
        phone: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ScheduleModel = model("Schedule", scheduleSchema);