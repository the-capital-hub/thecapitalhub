export const groupMessagesByDate = (messages) => {
  const groupedMessages = [];
  let currentDate = null;

  for (const message of messages) {
    const messageDate = new Date(message.createdAt);
    const today = new Date();

    if (
      currentDate &&
      currentDate.getDate() === messageDate.getDate() &&
      currentDate.getMonth() === messageDate.getMonth() &&
      currentDate.getFullYear() === messageDate.getFullYear()
    ) {
      groupedMessages[groupedMessages.length - 1].messages.push(message);
    } else if (
      currentDate &&
      currentDate.getDate() - messageDate.getDate() === 1 &&
      currentDate.getMonth() === messageDate.getMonth() &&
      currentDate.getFullYear() === messageDate.getFullYear()
    ) {
      currentDate = messageDate;
      groupedMessages.push({ date: "Yesterday", messages: [message] });
    } else {
      currentDate = messageDate;
      const formattedDate = `${messageDate.getDate()}-${
        messageDate.getMonth() + 1
      }-${messageDate.getFullYear()}`;
      groupedMessages.push({
        date:
          today.getDate() === messageDate.getDate() ? "Today" : formattedDate,
        messages: [message],
      });
    }
  }

  return groupedMessages;
};

export function formatMessages(messages, loggedInUserId) {
  let copy = groupMessagesByDate(messages);

  let formattedMessages = copy.map((group, index) => {
    let copyMessages = [...group.messages];

    let updatedMessages = copyMessages.map((message, idx) => {
      if (message.senderId._id !== loggedInUserId) {
        if (idx === 0) {
          return { ...message, showName: true };
        } else if (
          message.senderId._id !== copyMessages[idx - 1].senderId._id
        ) {
          return { ...message, showName: true };
        }
      }

      return message;
    });

    return { ...group, messages: updatedMessages };
  });

  return formattedMessages;
}
