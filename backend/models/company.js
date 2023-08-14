import { Schema, model } from "mongoose";

const companySchema = new Schema(
  {
    startup_name: {
      type: String,
      required: true
    },
    founderId: {
      type: String,
      required: true
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
      // required: true
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
      type: String
    },
    growthStrategy: {
      type: String
    },
    marketTraction: {
      type: String
    },
    businessModel: {
      type: String
    },
    growthModel: {
      type: String
    },
    team: {
      type: Array,
      default: [],
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
    }
  },
  {
    timestamps: true,
  }

);

export default model("Company", companySchema);

