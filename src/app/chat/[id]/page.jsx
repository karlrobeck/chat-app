"use client";
import Breadcrumbs from "@/lib/components/Breadcrumbs";
import Button from "@/lib/components/Button";
import Input from "@/lib/components/Input";
import Textarea from "@/lib/components/Textarea";
import React, { useState } from "react";
import { Send } from "react-bootstrap-icons";

const Page = ({ params }) => {
  const [showDiscussion, setshowDiscussion] = useState(true);
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const createDiscussion = (e) => {
    e.preventDefault();
    console.log(params.id);
    console.log(e.target.topic.value);
    console.log(e.target.topic_message.value);
    setshowDiscussion((prev) => !prev);
    setTopic((prev) => e.target.topic.value);
    setMessages((prev) => [...prev, e.target.topic_message.value]);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (e.target.user_message.value !== "") {
      setMessages((prev) => [...prev, e.target.user_message.value]);
      setUserMessage("");
    }
  };

  return (
    <main className="relative">
      {showDiscussion && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="z-10 p-4 space-y-3">
            <span className="font-bold text-lg">Create a Discussion</span>
            <p>Fill out the form to get started</p>
            <form onSubmit={createDiscussion} className="space-y-3">
              <Input name="topic" placeholder="Topic" className="input-block" />
              <Textarea
                name="topic_message"
                placeholder="Write a message..."
                className="textarea-block textarea-ghost-primary"
              />
              <Button type="submit" className="btn-block btn-primary">
                Create a conversation
              </Button>
            </form>
          </div>
        </div>
      )}
      <div className="h-screen flex flex-col justify-between">
        <section className="p-4 border-b">
          <Breadcrumbs>
            <Breadcrumbs.Body>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link>Teacher name</Breadcrumbs.Link>
              </Breadcrumbs.Item>
              <Breadcrumbs.Item>
                <Breadcrumbs.Link>{topic}</Breadcrumbs.Link>
              </Breadcrumbs.Item>
            </Breadcrumbs.Body>
          </Breadcrumbs>
        </section>
        <div className="h-screen flex flex-col justify-end overflow-scroll">
          {messages.map((message, index) => (
            <span
              className="rounded-md p-1 ms-auto"
              key={`data-message-discussion-${index}`}
            >
              {message}
            </span>
          ))}
        </div>
        <section className="p-4">
          <form onSubmit={sendMessage} className="flex w-full gap-3" action="">
            <Input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              name="user_message"
              className="input-block"
              placeholder="Write a message..."
              type="text"
            />
            <Button type="submit">
              <Send />
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Page;
