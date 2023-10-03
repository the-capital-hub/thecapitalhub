import { CommunityModel } from "../models/Community.js";
import { cloudinary } from "../utils/uploadImage";

export const createCommunity = async (communitydata) => {
  try {
    if (communitydata.profileImage) {
      const { url } = await cloudinary.uploader.upload(communitydata.profileImage, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/images`,
        format: "webp",
        unique_filename: true,
      });
      communitydata.profileImage = url;
    }
    const newCommunity = new CommunityModel({
      ...communitydata,
    });
    await newCommunity.save();
    return {
      status: 200,
      message: "New Community Created",
      data: newCommunity,
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while creating community.",
    };
  }
};

export const getCommunityById = async (communityId) => {
  try {
    const community = await CommunityModel.findById(communityId)

    if (!community) {
      return {
        status: 404,
        message: 'Community not found',
      };
    }

    return {
      status: 200,
      message: 'Community retrieved successfully',
      data: community,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'An error occurred while retrieving the community.',
    };
  }
};

export const getAllCommunitiesByUserId = async (userId) => {
  try {
    const communities = await CommunityModel.find({ members: userId }).populate({
      path: "members",
      model: "Users",
      select: "firstName lastName profilePicture",
    })
    .exec();

    return {
      status: 200,
      message: 'Communities retrieved successfully',
      data: communities,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'An error occurred while retrieving communities.',
    };
  }
};
