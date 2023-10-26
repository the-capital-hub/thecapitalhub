import { CommunityModel } from "../models/Community.js";
import { cloudinary } from "../utils/uploadImage";
import { MessageModel } from "../models/Message.js";
import { UserModel } from "../models/User.js";

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

export const updateCommunity = async (communityId, updatedData) => {
  try {
    const community = await CommunityModel.findById(communityId);

    if (!community) {
      return {
        status: 404,
        message: 'Community not found',
      };
    }
    if (updatedData.profileImage) {
      const { url } = await cloudinary.uploader.upload(updatedData.profileImage, {
        folder: `${process.env.CLOUDIANRY_FOLDER}/posts/images`,
        format: 'webp',
        unique_filename: true,
      });
      community.profileImage = url;
    }

    community.communityName = updatedData.communityName || community.communityName;
    community.description = updatedData.description || community.description;
    community.about = updatedData.about || community.about;
    community.members = updatedData.members || community.members;

    await community.save();

    return {
      status: 200,
      message: 'Community updated successfully',
      data: community,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'An error occurred while updating the community',
    };
  }
};

export const exitCommunity = async (userId, communityId) => {
  try {
    const community = await CommunityModel.findById(communityId);

    if (!community) {
      return {
        status: 404,
        message: "Community not found",
      };
    }
    const isMember = community.members.includes(userId);

    if (!isMember) {
      return {
        status: 400,
        message: "User is not a member of the community",
      };
    }
    community.members = community.members.filter((memberId) => memberId.toString() !== userId);
    await community.save();

    return {
      status: 200,
      message: "User has exited the community",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while exiting the community",
    };
  }
};

export const getUnAddedMembers = async (userId, communityId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const community = await CommunityModel.findById(communityId);
    if (!community) {
      return {
        status: 404,
        message: "Community not found",
      };
    }
    const userConnections = user.connections;
    const unAddedMembers = userConnections.filter(
      (connectionId) => !community.members.includes(connectionId)
    );
    const unAddedMembersInfo = await UserModel.find({
      _id: { $in: unAddedMembers },
    }).select("firstName lastName profilePicture");

    return {
      status: 200,
      message: "Unadded members retrieved successfully",
      data: unAddedMembersInfo,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while retrieving unadded members",
      data: [],
    };
  }
};

export const addMembersToCommunity = async (communityId, memberIds) => {
  try {
    const community = await CommunityModel.findById(communityId);
    if (!community) {
      return {
        status: 404,
        message: "Community not found",
      };
    }
    community.members = [...new Set([...community.members, ...memberIds])];
    await community.save();
    return {
      status: 200,
      message: "Members added to the community successfully",
      data: community,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while adding members to the community",
    };
  }
};

export const deleteCommunity = async (communityId, userId) => {
  try {
    console.log(communityId, userId);
    const community = await CommunityModel.findOneAndDelete({ _id: communityId, adminId: userId });
    if (!community) {
      return {
        status: 403,
        message: 'You are not authorized to delete this community',
      };
    }
    return {
      status: 200,
      message: 'Community deleted successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: 'An error occurred while deleting the community',
    };
  }
};
