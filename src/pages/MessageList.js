import React from "react";
import { useSelector } from "react-redux";

function MessageList() {
  const messageList = useSelector((state) => state.messages.messages);

  return (
    <div>
      <h1>Message list page</h1>
      {messageList.map((item) => (
        <p key={item.id}>{item.id}: {item.chatLog[item.chatLog.length-1]}</p>
      ))}
    </div>
  );
}

export default MessageList;