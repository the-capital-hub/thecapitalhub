import { Schema, model } from "mongoose";

const investorSchema = new Schema(
  {
    founderId: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    maximumInvest: {
      type: Number,
      // required: true,
    },
    minimumInvest: {
      type: Number,
      // required: true,
    },
    portfolio: {
      type: String,
    },
    sectorInterested: [
      {
        logo: String,
        name: String,
      },
    ],
    startupsInvested: [
      {
        name: String,
        description: String,
        logo: String,
        investedEquity: String,
      },
    ],
    myInterests: [
      {
        logo: String,
        name: String,
        ask: String,
        commitment: String,
        investedEquity: String,
      },
    ],
    investmentPhilosophy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const InvestorModel = model("Investors", investorSchema);
