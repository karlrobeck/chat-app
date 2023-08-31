"use client";
import React from "react";

const Sidebar = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar ${className}`}>
      {children}
    </div>
  );
};

const Header = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-header ${className}`}>
      {children}
    </div>
  );
};

const Footer = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-footer ${className}`}>
      {children}
    </div>
  );
};

const Content = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-content ${className}`}>
      {children}
    </div>
  );
};

Sidebar.Content = Content;
Sidebar.Header = Header;
Sidebar.Footer = Footer;

export default Sidebar;
