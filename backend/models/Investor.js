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
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
    introductoryMessage: {
      type: String,
    },
    location: {
      type: String,
      // required: true,
    },
    industry: {
      type: String,
      // required: true,
    },
    startedAtDate: {
      type: String,
    },
    noOfEmployees: {
      type: Number,
    },
    vision: {
      type: String,
    },
    mission: {
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
    socialLinks: {
      website: String,
      linkedin: String,
      twitter: String,
      instagram: String,
    },
    colorCard: {
      averageInvestment: String,
      total_investment: String,
      no_of_investments: String,
      minimumTicketsSize: String,
      maximumTicketsSize: String,
      seedRound: String,
    },
    keyFocus: {
      type: String,
    },
    oneLink: {
      type: String,
      default: function () {
        return this.companyName.split(" ").join("").toLowerCase();
      },
    },
  },
  {
    timestamps: true,
  }
);

export const InvestorModel = model("Investors", investorSchema);
