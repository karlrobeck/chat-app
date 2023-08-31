"use client";
import React from "react";

const Sidebar = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar ${className}`}>
      {children}
    </div>
  );
};

Sidebar.Header = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-header ${className}`}>
      {children}
    </div>
  );
};

Sidebar.Footer = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-footer ${className}`}>
      {children}
    </div>
  );
};

Sidebar.Content = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`sidebar-content ${className}`}>
      {children}
    </div>
  );
};
export default Sidebar;
