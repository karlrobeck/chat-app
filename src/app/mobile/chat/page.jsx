"use client";
import Avatar from "@/lib/components/Avatar";
import Breadcrumbs from "@/lib/components/Breadcrumbs";
import Button from "@/lib/components/Button";
import Input from "@/lib/components/Input";
import Textarea from "@/lib/components/Textarea";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, List, Send } from "react-bootstrap-icons";

const Page = () => {
  const searchQuery = useSearchParams();
  const [showDiscussion, setshowDiscussion] = useState(true);
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const scrollRef = useRef();

  const createDiscussion = (e) => {
    e.preventDefault();
    setshowDiscussion((prev) => !prev);
    setTopic((prev) => e.target.topic.value);
    if (e.target.topic_message.value) {
      setMessages((prev) => [...prev, e.target.topic_message.value]);
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (e.target.user_message.value !== "") {
      setMessages((prev) => [...prev, e.target.user_message.value]);
      setUserMessage("");
    }
  };

  useEffect(() => {
    if (messages.length) {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  return (
    <main className="relative flex flex-col justify-between h-screen p-4">
      {showDiscussion && (
        <div className="absolute inset-0 z-10 bg-black bg-opacity-75 flex justify-center items-center">
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
              <div className="flex w-full gap-3">
                <Link
                  href={"/mobile/menu"}
                  className="btn btn-block btn-outline-error"
                >
                  Cancel
                </Link>
                <Button type="submit" className="btn-block btn-primary">
                  Create a conversation
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      <section className="border-b py-2 flex gap-3 items-center">
        <Link href={"/mobile/menu"}>
          <Button className="btn-ghost">
            <ChevronLeft />
          </Button>
        </Link>
        <span className="px-4 flex items-center justify-between gap-3 w-full">
          <div className="flex">
            <Avatar>
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="avatar"
              />
            </Avatar>
            <Breadcrumbs>
              <Breadcrumbs.Body>
                <Breadcrumbs.Item>Teacher 1</Breadcrumbs.Item>
                <Breadcrumbs.Item>{topic}</Breadcrumbs.Item>
              </Breadcrumbs.Body>
            </Breadcrumbs>
          </div>
          <List />
        </span>
      </section>
      <section className="h-screen overflow-auto py-4 flex flex-col gap-3">
        {messages.map((message, index) => (
          <span
            key={`data-chat-messages-${index}`}
            className="ms-auto break-words w-1/2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {message}
          </span>
        ))}
        <div ref={scrollRef} />
      </section>
      <form onSubmit={sendMessage} className="flex gap-3" action="">
        <Input
          name="user_message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          className="input-block"
          placeholder="Write a message..."
        />
        <Button type="submit" className="btn-outline-primary">
          <Send />
        </Button>
      </form>
    </main>
  );
};

export default Page;
