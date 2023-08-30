"use client";
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
  ];
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [systemUpdate, setSystemUpdate] = useState(true);

  return (
    <main className="flex">
      {systemUpdate && (
        <div className="absolute left-1/2 alert alert-warning max-w-sm">
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
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span>System Notification</span>
              <span className="text-content2">
                System is currently under development
              </span>
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
      <aside className="hidden sm:block border-r h-screen">
        {/* side menu */}
        {sidebarToggle && (
          <>
            <div
              onClick={() => setSidebarToggle((prev) => !prev)}
              className="absolute inset-0 bg-black bg-opacity-75 z-10"
            />
            <aside className="sidebar absolute z-20">
              <section className="sidebar-title p-4 gap-3">
                <div className="avatar">
                  <img
                    src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    alt="avatar"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-md">Student name</span>
                  <span className="text-xs font-normal">Role:student</span>
                </div>
              </section>
              <section className="sidebar-content">
                <nav className="menu bg-gray-2 p-4 rounded-md">
                  <section className="menu-section">
                    <span className="menu-title">Main menu</span>
                    <ul className="menu-items">
                      <li className="menu-item">General</li>
                      <li className="menu-item">Teams</li>
                      <li className="menu-item">Projects</li>
                      <li className="menu-item">Calendar</li>
                    </ul>
                  </section>
                </nav>
              </section>
            </aside>
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
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <input className="input" placeholder="Search" type="text" />
        </div>
        {/* contacts */}
        <nav className="menu p-2 rounded-md">
          <section className="menu-section">
            <span class="menu-title">Contacts</span>
            <ul className="menu-items">
              {teachers.map((name, index) => (
                <li
                  key={`teacher-contact-${name}-${index}`}
                  className="menu-item"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 fill-content3"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
                    ></path>
                  </svg>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </aside>
      <section className="w-full sm:w-3/4 h-screen">{children}</section>
    </main>
  );
};

export default Layout;
