import { ConnectionModel } from "../models/Connection.js";
import { UserModel } from "../models/User.js";

//send connect request
export const sendConnectionRequest = async (senderId, receiverId) => {
  try {
    const existingConnection = await ConnectionModel.findOne({
      sender: senderId,
      receiver: receiverId,
      status: "pending",
    });
    if (existingConnection) {
      return {
        status: 400,
        message: "Connection request already sent",
        data: [],
      };
    }

    const connection = new ConnectionModel({
      sender: senderId,
      receiver: receiverId,
      status: "pending",
    });
    await connection.save();
    return {
      status: 200,
      message: "Connection Request Sent",
      data: connection,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while sending connection request.",
    };
  }
};

// get sent pending connections of a user
export const getSentPendingConnectionRequests = async (userId) => {
  try {
    const sentRequests = await ConnectionModel.find({
      sender: userId,
      status: "pending",
    }).populate("receiver", "firstName lastName");
    if (sentRequests.length === 0) {
      return {
        status: 200,
        message: "No pending request found",
        data: [],
      };
    }
    return {
      status: 200,
      message: "Sent pending connection requests retrieved successfully",
      data: sentRequests,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message:
        "An error occurred while getting sent pending connection requests.",
    };
  }
};

// Cancel  connection request
export const cancelConnectionRequest = async (connectionId) => {
  try {
    const connection = await ConnectionModel.findById(connectionId);
    if (!connection) {
      return {
        status: 404,
        message: "Connection not found",
      };
    }
    await ConnectionModel.findByIdAndRemove(connectionId);
    return {
      status: 200,
      message: "Connection Request Canceled",
      data: connection,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "An error occurred while canceling the connection request.",
    };
  }
};

// Get pending connection requests received by a user
export const getPendingConnectionRequests = async (userId) => {
  try {
    const pendingRequests = await ConnectionModel.find({
      receiver: userId,
      status: "pending",
    })
      .populate("sender", "firstName lastName profilePicture designation")
      .sort({ _id: "-1" });

    return {
      status: 200,
      message: "Pending requests retrived successfully",
      data: pendingRequests,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while getting pending connection request.",
    };
  }
};

//accept user connections
export const acceptConnectionRequest = async (connectionId) => {
  try {
    const connection = await ConnectionModel.findByIdAndUpdate(
      connectionId,
      { status: "accepted" },
      { new: true }
    );
    await UserModel.findOneAndUpdate(
      { _id: connection.sender },
      { $push: { connections: connection.receiver } }
    );
    await UserModel.findOneAndUpdate(
      { _id: connection.receiver },
      { $push: { connections: connection.sender } }
    );
    return {
      status: 200,
      message: "Connection Accepted",
      data: connection,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while accepting the connection request.",
    };
  }
};

//reject user connections
export const rejectConnectionRequest = async (connectionId) => {
  try {
    const connection = await ConnectionModel.findByIdAndUpdate(
      connectionId,
      { status: "rejected" },
      { new: true }
    );
    return {
      status: 200,
      message: "Connection Rejected",
      data: connection,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while rejecting the connection request.",
    };
  }
};

//get all user connections
export const getUserConnections = async (userId) => {
  try {
    const user = await UserModel.findById(userId).populate(
      "connections",
      "firstName lastName"
    );
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    return {
      status: 200,
      message: "Connections retrieved successfully",
      data: user.connections,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while getting user connections.",
    };
  }
};

//remove accepted connection
export const removeConnection = async (connectionId) => {
  try {
    const connection = await ConnectionModel.findById(connectionId);
    if (!connection) {
      return {
        status: 404,
        message: "Connection not found",
      };
    }
    if (connection.status === "accepted") {
      await UserModel.findByIdAndUpdate(connection.sender, {
        $pull: { connections: connection.receiver },
      });
      await UserModel.findByIdAndUpdate(connection.receiver, {
        $pull: { connections: connection.sender },
      });
    }
    await ConnectionModel.findByIdAndRemove(connectionId);
    return {
      status: 200,
      message: "Connection Removed",
      data: connection,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while removing the connection.",
    };
  }
};

export const getRecommendations = async (userId) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        status: 404,
        message: "User not found",
      };
    }
    const recommendations = [];
    const userConnections = user.connections;
    for (const connectedUserId of userConnections) {
      const connectedUser = await UserModel.findById(connectedUserId);
      const mutualConnections = connectedUser.connections;
      
      for (const connectionId of mutualConnections) {
        if (connectionId.toString() !== userId && !recommendations.includes(connectionId)) {
          const existsPendingConnections = await ConnectionModel.findOne({
            $or: [
              { sender: userId, receiver: connectionId, status: "pending" },
              { sender: connectionId, receiver: userId, status: "pending" }
            ]
          });
          if (!existsPendingConnections) recommendations.push(connectionId);
        }
      }
    }
    
    if (recommendations.length === 0 )
    {
      const users = await UserModel.find({ _id: { $nin: userConnections }, userStatus: "active" });
      return {
        status: 200,
        message: "Recommended User data retrived successfully",
        data: users
      }
    }
    const users = await UserModel.find({ _id: { $in: recommendations } });
    return {
      status: 200,
      message: "Recommended User data retrived successfully",
      data: users
    }
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      message: "An error occurred while getting recomendations"
    }
  }
}
