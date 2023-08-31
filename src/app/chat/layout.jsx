"use client";
import Avatar from "@/lib/components/Avatar";
import Input from "@/lib/components/Input";
import Menu from "@/lib/components/Menu";
import Sidebar from "@/lib/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const teachers = [
    "Teacher 1",
    "Teacher 2",
    "Teacher 3",
    "Teacher 4",
    "Teacher 5",
    "Teacher 6",
    "Teacher 7",
    "Teacher 8",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
    "Teacher 9",
  ];
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <main className="flex">
      <aside className="hidden sm:block border-r h-screen overflow-y-auto">
        {/* side menu overlay */}
        {sidebarToggle && (
          <>
            <div
              onClick={() => setSidebarToggle((prev) => !prev)}
              className="absolute inset-0 bg-black bg-opacity-75 z-10"
            />
            <Sidebar className="p-4 absolute z-10">
              <Sidebar.Header className="flex gap-3">
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
              </Sidebar.Header>
              <Sidebar.Content>
                <Menu>
                  <Menu.Section>
                    <Menu.Title>Main Menu</Menu.Title>
                    <Menu.Items>
                      <Menu.Item>Team</Menu.Item>
                      <Menu.Item>hello</Menu.Item>
                    </Menu.Items>
                  </Menu.Section>
                </Menu>
              </Sidebar.Content>
            </Sidebar>
          </>
        )}
        {/* top menu */}
        <div className="flex items-center p-3 gap-3">
          <button onClick={() => setSidebarToggle((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <Input placeholder="Search" className="input-block" />
        </div>
        {/* contacts */}
        <Menu className="p-4">
          <Menu.Section>
            <Menu.Title>Faculty Staff</Menu.Title>
            <Menu.Items>
              {teachers.map((name, index) => (
                <Menu.Item key={`data-menu-chat-item-${index}`}>
                  <Link
                    className="flex w-full gap-2"
                    href={`/chat/convo?id=${index}`}
                  >
                    <Avatar className="avatar-lg">
                      <img
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        alt="avatar"
                      />
                    </Avatar>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between">
                        <span>{name}</span>
                        <time>9:20pm</time>
                      </div>
                      <span>recent discussion</span>
                    </div>
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu.Section>
        </Menu>
      </aside>
      <section className="w-full sm:w-3/4 h-screen">{children}</section>
    </main>
  );
};

export default Layout;
