import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import chatbotLogo from "../../assets/chatbot.png";

function Chatbot() {
  const [openChat, setOpenChat] = useState(false);

  const turnOnWindow = () => {
    setOpenChat(!openChat);
  };
  return (
    <div className="absolute bottom-0 right-10 ">
      <div className=" h-30 w-30 ">
        <div
          className={`ImageChatbot ${
            openChat ? "" : "animate-bounce"
          } bg-white rounded-2xl`}
        >
          <img
            src={chatbotLogo}
            alt="chatbot-logo"
            onClick={() => turnOnWindow()}
          />
        </div>
        <div className="absolute bottom-27 right-20">
          {" "}
          {openChat ? <ChatWindow /> : ""}
        </div>
        {}
      </div>
    </div>
  );
}

export default Chatbot;
