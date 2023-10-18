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
    requestedBy: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export const ScheduleModel = model("Schedule", scheduleSchema);