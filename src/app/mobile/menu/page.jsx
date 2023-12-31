"use client";
import Avatar from "@/lib/components/Avatar";
import Button from "@/lib/components/Button";
import Input from "@/lib/components/Input";
import Menu from "@/lib/components/Menu";
import Sidebar from "@/lib/components/Sidebar";
import Link from "next/link";
import React, { useState } from "react";
import { Chat, Gear, List, People } from "react-bootstrap-icons";

const Page = () => {
  const teachers = [
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
    "teacher1",
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="w-full h-screen overflow-auto">
      {/* Sidebar */}
      {showSidebar && (
        <div
          className="absolute inset-0 z-10 w-full"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <Sidebar className="p-4 w-3/4 z-20">
            <Sidebar.Header>
              <div className="flex gap-3">
                <Avatar>
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-md font-bold">Student name</span>
                  <span className="text-xs font-normal">Role:student</span>
                </div>
              </div>
            </Sidebar.Header>
            <Sidebar.Content>
              <Menu>
                <Menu.Section>
                  <Menu.Title>Main Menu</Menu.Title>
                  <Menu.Items>
                    <Menu.Item>
                      <Chat />
                      <span>Chat</span>
                    </Menu.Item>
                    <Menu.Item>
                      <People />
                      <span>Groups</span>
                    </Menu.Item>
                    <Menu.Item>
                      <Gear />
                      <span>Settings</span>
                    </Menu.Item>
                  </Menu.Items>
                </Menu.Section>
              </Menu>
            </Sidebar.Content>
          </Sidebar>
        </div>
      )}
      {/* Menu */}
      <nav className="p-4 flex gap-3">
        <Button onClick={() => setShowSidebar((prev) => !prev)}>
          <List />
        </Button>
        <Input className="input-block" placeholder="Search..." />
      </nav>
      <Menu className="px-4">
        <Menu.Section>
          <Menu.Title>Faculty Staff</Menu.Title>
          <Menu.Items>
            {teachers.map((name, index) => (
              <Link
                key={`data-menu-${name}-${index}`}
                href={`/mobile/chat?id=${index}`}
              >
                <Menu.Item>
                  <Avatar className="avatar-xl">
                    <img
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      alt="avatar"
                    />
                  </Avatar>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                      <span>{name}</span>
                      <span>Time</span>
                    </div>
                    <span>Recent Message</span>
                  </div>
                </Menu.Item>
              </Link>
            ))}
          </Menu.Items>
        </Menu.Section>
      </Menu>
    </main>
  );
};

export default Page;
