import mongoose, { Schema, model } from "mongoose";
// import validator from "validator";
import { hashPassword } from "../utils/passwordManager.js";

const collectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posts",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      // required: [true, "User must have a first name."],
      // minlength: [3, "First Name must not be shorter than 3 characters"],
      // maxlength: [10, "First Name must not be longer than 10 characters"],
      // validate: { validator: validator.isAlpha, message: "Invalid First Name" },
      trim: true,
    },
    lastName: {
      type: String,
      // required: [true, "User must have a last name."],
      // minlength: [3, "Last Name must not be shorter than 3 characters"],
      // maxlength: [10, "Last Name must not be longer than 10 characters"],
      // validate: { validator: validator.isAlpha, message: "Invalid Last Name" },
      trim: true,
    },
    phoneNumber: {
      type: String,
      // unique: true,
      // required: [true, "Chief Warden must have an contact number."],
      // validate: {
      //   validator: (number) => number.toString().length === 13,
      //   message: "Invalid phone number",
      // },
    },
    email: {
      type: String,
      trim: true,
      // unique: true,
      lowercase: true,
      // required: [true, "User must have an email."],
      // validate: {
      //   validator: function (email) {
      //     return /[a-z0-9]+@[a-z0-9]+.com/i.test(email);
      //   },
      //   message: "Invalid e-Mail",
      // },
    },
    password: {
      type: String,
      // required: [true, "User must have a password."],
    },
    experience: String,
    // experience: [
    //   {
    //     type: String,
    //   },
    // ],
    bio: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
      // required: [true, "User must provide location"],
    },
    gender: {
      type: String,
      // required: [true, "User must provide gender"],
    },
    startUp: {
      type: Schema.Types.ObjectId,
      ref: "StartUps",
    },
    profilePicture: {
      type: String,
      default:
        "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp",
    },
    designation: String,
    savedPosts: [collectionSchema],
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    recentExperience: [
      {
        logo: String,
        companyName: String,
        location: String,
        experienceDuration: String,
        role: String,
      },
    ],

    recentEducation: [
      {
        logo: String,
        collegeName: String,
        location: String,
        passoutYear: Number,
        course: String,
      },
    ],
    investor: {
      type: Schema.Types.ObjectId,
      ref: "Investors",
    },
    userStatus: {
      type: String,
      default: "inactive"
    }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified && this.isModified("password")) {
      this.password = await hashPassword(this.password);
    }
    next();
  } catch (error) {
    throw error;
  }
});

userSchema.pre(
  ["updateOne", "findByIdAndUpdate", "findOneAndUpdate"],
  async function (next) {
    try {
      const data = this.getUpdate();
      if (data?.password) {
        data.password = hashPassword(this.password);
      }
      next();
    } catch (error) {
      throw error;
    }
  }
);

export const UserModel = model("Users", userSchema);
