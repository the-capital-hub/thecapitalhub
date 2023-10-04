import { CommunityModel } from "../models/Community.js";
import { cloudinary } from "../utils/uploadImage";
import { MessageModel } from "../models/Message.js";

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
    const members = [...new Set(communitydata.members)];
    const newCommunity = new CommunityModel({
      ...communitydata,
      members: members,
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

export const getCommunitySettings = async (communityId) => {
  try {
    const community = await CommunityModel.findById(communityId).populate('members');
    //fetch images
    const images = await MessageModel.find({
      chatId: communityId,
      image: { $ne: null }, 
    });

    // Fetch videos
    const videos = await MessageModel.find({
      chatId: communityId,
      video: { $ne: null }, 
    });

    // Fetch documents
    const documents = await MessageModel.find({
      chatId: communityId,
      documentUrl: { $ne: null },
    });
    return {
      status: 200,
      message: "Community settings retrieved successfully.",
      data: {
        community,
        images,
        videos,
        documents
      },
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while getting community settings.",
    };
  }
}