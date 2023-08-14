import { Schema, model } from "mongoose";

const startUpSchema = new Schema(
  {
    startup_name: {
      type: String,
      required: true,
    },
    founderId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    introductoryMessage: {
      type: String,
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
    },
    description: {
      type: String,
    },
    problem: {
      type: String,
    },
    solution: {
      type: String,
    },
    competitiveLandscape: {
      type: String,
    },
    growthStrategy: {
      type: String,
    },
    marketTraction: {
      type: String,
    },
    businessModel: {
      type: String,
    },
    growthModel: {
      type: String,
    },
    team: {
      type: Array,
      default: [
        {
          name: String,
          designation: String,
          image: String,
        },
      ],
    },
    TAM: {
      type: Number,
      // required: true
    },
    SAM: {
      type: Number,
      // required: true
    },
    SOM: {
      type: Number,
      // required: true
    },
    revenue: {
      type: Number,
      // required: true
    },
    expenses: {
      type: Number,
      // required: true
    },
    fundingAsk: {
      type: Number,
      // required: true
    },
    oneLink: {
      type: String,
      default: function () {
        return this.startup_name.split(" ").join("").toLowerCase();
      },
    },
    contactDetails: {
      fullName: String,
      phoneNumber: String,
      email: String,
    },
  },
  {
    timestamps: true,
  }
);

export const StartUpModel = model("StartUps", startUpSchema);
