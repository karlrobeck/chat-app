"use client";
import React, { useRef, useState } from "react";

const Page = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [systemUpdate, setSystemUpdate] = useState(true);

  const sendMessage = (e) => {
    e.preventDefault();
    if (e.target.message.value !== "") {
      setMessages((prev) => [...prev, e.target.message.value]);
      setUserMessage("");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {systemUpdate && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="alert alert-warning w-1/2 flex justify-between">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="35"
                viewBox="0 0 40 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.94024 35.0004H35.0602C38.1402 35.0004 40.0602 31.6604 38.5202 29.0004L23.4602 2.98035C21.9202 0.320352 18.0802 0.320352 16.5402 2.98035L1.48024 29.0004C-0.0597576 31.6604 1.86024 35.0004 4.94024 35.0004ZM20.0002 21.0004C18.9002 21.0004 18.0002 20.1004 18.0002 19.0004V15.0004C18.0002 13.9004 18.9002 13.0004 20.0002 13.0004C21.1002 13.0004 22.0002 13.9004 22.0002 15.0004V19.0004C22.0002 20.1004 21.1002 21.0004 20.0002 21.0004ZM22.0002 29.0004H18.0002V25.0004H22.0002V29.0004Z"
                  fill="#F98600"
                />
              </svg>
              <div className="inline-flex flex-col">
                <span>System Notification</span>
                <span className="text-content2">
                  This System is under development
                </span>
              </div>
            </div>
            <button onClick={() => setSystemUpdate((prev) => !prev)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.3007 5.71C17.9107 5.32 17.2807 5.32 16.8907 5.71L12.0007 10.59L7.1107 5.7C6.7207 5.31 6.0907 5.31 5.7007 5.7C5.3107 6.09 5.3107 6.72 5.7007 7.11L10.5907 12L5.7007 16.89C5.3107 17.28 5.3107 17.91 5.7007 18.3C6.0907 18.69 6.7207 18.69 7.1107 18.3L12.0007 13.41L16.8907 18.3C17.2807 18.69 17.9107 18.69 18.3007 18.3C18.6907 17.91 18.6907 17.28 18.3007 16.89L13.4107 12L18.3007 7.11C18.6807 6.73 18.6807 6.09 18.3007 5.71Z"
                  fill="#969696"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
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
