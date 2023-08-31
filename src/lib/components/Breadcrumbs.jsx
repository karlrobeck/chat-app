"use client";
import React from "react";

const Breadcrumbs = ({ children, className = "", ...props }) => {
  return <div className={`breadcrumbs${className}`}>{children}</div>;
};

Breadcrumbs.Body = ({ children, className = "", ...props }) => {
  return <ul className={className}>{children}</ul>;
};

Breadcrumbs.Item = ({ children, className = "", ...props }) => {
  return <li className={className}>{children}</li>;
};
Breadcrumbs.Link = ({ children, className = "", href = "", ...props }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Breadcrumbs;
