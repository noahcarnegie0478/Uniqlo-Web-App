import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import axios from "axios";

function ChatWindow() {
  const [Conversations, setConversations] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConversation = async input => {
    setLoading(true);
    const result = await axios.post(
      `${import.meta.env.VITE_PUBLISH_SERVER}api/answer/get`,
      {
        user_input: input,
      }
    );
    if (result) {
      setLoading(false);
      setConversations(prev => [
        ...prev,
        {
          client: input,
          bot: result.data,
        },
      ]);
      setUserInput("");
    }
  };

  return (
    <div className="h-120 w-100 bg-white rounded-2xl border-4 border-red-500 border-double p-3 overflow-auto  relative flex flex-col ">
      {Conversations.length != 0 ? (
        <div className="flex-1 overflow-y-auto mb-2 py-5   ">
          {Conversations.map((conversation, index) => (
            <div className="chat-coversation" key={index + "converse"}>
              <div className="client text-end text-white bg-red-500 font-semibold mb-1 p-2 rounded-xl shadow-lg text-white mt-0 ">
                <p>{conversation.client}</p>
              </div>
              <div className="chat-bot text-start  bg-gray-400 mb-4 p-2 rounded-xl w-auto   shadow-lg text-white  ">
                <p>{conversation.bot}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="generated text-start  bg-gray-400 mb-4 p-2 rounded-xl w-auto   shadow-lg text-white">
            <p>Welcome to Uniqlo, how may i help you today ? ^^</p>
          </div>
        </div>
      )}
      <div>
        {loading ? (
          <div className="generated text-start  bg-gray-400 mb-4 p-2 rounded-xl w-auto   shadow-lg text-white  ">
            <p> please wait a moment, we will answer you soon</p>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="client-input absolute bottom-0 h-10  flex gap-2 w-full bg-white pt-1">
        {" "}
        <div className="w-4/5 border-4 border-red-500 border-double rounded-lg h-full">
          <input
            type="text "
            className="w-full"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
        </div>
        <button
          className="bg-red-500 px-2 w-1/5"
          onClick={() => handleConversation(userInput)}
        >
          <BiChevronsRight className="text-lg" />{" "}
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
