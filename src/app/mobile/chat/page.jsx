"use client";
import Button from "@/lib/components/Button";
import Input from "@/lib/components/Input";
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
    <main className="flex flex-col justify-between h-screen p-4">
      <section className="border-b py-2 flex gap-3 items-center">
        <Link href={"/mobile/menu"}>
          <Button className="btn-ghost">
            <ChevronLeft />
          </Button>
        </Link>
        <span>Chat info</span>
      </section>
      <section className="h-screen overflow-auto py-4 flex flex-col gap-3">
        {messages.map((message, index) => (
          <span className="ms-auto break-words w-1/2 bg-blue-500 px-4 py-2 rounded-md">
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
