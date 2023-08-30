"use client";
import React, { useRef, useState } from "react";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (e.target.message.value !== "") {
      setMessages((prev) => [...prev, e.target.message.value]);
      setUserMessage("");
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* chat info */}
      <section className="h-[10%] container flex justify-between items-center p-4 border-b">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Conversation Name</span>
          <span className="font-normal text-sm">Conversation Status</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-three-dots-vertical w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
      </section>
      {/* chat convo */}
      <section className="h-[80%] p-4 flex flex-col gap-3 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={`data-message-${index}`}
            className="container flex justify-end"
          >
            <span className="px-4 bg-gray-500 rounded-full">{message}</span>
          </div>
        ))}
      </section>
      {/* Chat Message */}
      <form
        onSubmit={sendMessage}
        className="container flex items-center gap-3 p-2.5 bg-gray-2 w-full"
      >
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-paperclip"
            viewBox="0 0 16 16"
          >
            <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
          </svg>
        </button>
        <input
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="input-block input"
          placeholder="Write a message..."
          name="message"
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Page;
