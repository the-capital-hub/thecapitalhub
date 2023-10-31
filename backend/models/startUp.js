import { Schema, model } from "mongoose";

const startUpSchema = new Schema(
  {
    colorCard: {
      last_round_investment: String,
      total_investment: String,
      no_of_investers: String,
      fund_ask: String,
      valuation: String,
      raised_funds: String,
    },
    company: {
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
    previousIntroductoryMessage: {
      type: Array,
    },
    sector: {
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
    briefIntroduction: {
      type: String,
    },
    startedAtDate: {
      type: String,
    },
    industryType: {
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
    problem: {
      type: String,
    },
    solution: {
      type: String,
    },
    marketLandscape: {
      type: String,
    },
    competitiveLandscape: {
      type: String,
    },
    competitors: {
      type: Array,
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
      // default: [
      //   {
      //     name: String,
      //     designation: String,
      //     image: String,
      //   },
      // ],
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
    fundingsAsk: [
      {
        required: String,
        amount: String,
      }
    ],
    roadMap: [
      {
        date: String,
        milestone: String,
      }
    ],
    preFundingAsk: {
      type: Number,
      // required: true
    },
    numberOfFundingRounds: {
      type: Number,
      // required: true
    },
    oneLink: {
      type: String,
      unique: true,
      default: function () {
        return this.company.split(" ").join("").toLowerCase();
      },
    },
    contactDetails: {
      fullName: String,
      phoneNumber: String,
      email: String,
    },
    socialLinks: {
      website: String,
      linkedin: String,
      twitter: String,
      instagram: String,
    },
    portfolio: String,
    investorProposals: {
      type: Array,
      default: [
        {
          name: String,
          email: String,
          phone: String,
        },
      ],
    },
    keyFocus: {
      type: String,
    },
    tagline: {
      type: String,
    },
    projections: {
      type: Array,
    },
    age: {
      type: String,
    },
    milestones: [
      {
        type: Schema.Types.ObjectId,
        ref: "Milestones",
      },
    ],
    fundingRaised: {
      type: String,
    },
    productStage: {
      type: String,
    },
    stage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

startUpSchema.pre('save', async function (next) {
  const doc = this;
  const originalOneLink = doc.oneLink;
  const count = await StartUpModel.countDocuments({ oneLink: originalOneLink });
  if (count > 0) {
    let suffix = 1;
    while (await StartUpModel.countDocuments({ oneLink: originalOneLink + suffix }) > 0) {
      suffix++;
    }
    doc.oneLink = originalOneLink + suffix;
  }
  next();
});

export const StartUpModel = model("StartUps", startUpSchema);
