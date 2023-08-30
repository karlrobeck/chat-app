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

  return (
    <main className="flex">
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
