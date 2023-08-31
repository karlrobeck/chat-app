"use client";
import React from "react";

const Breadcrumbs = ({ children, className = "", ...props }) => {
  return <div className={`breadcrumbs${className}`}>{children}</div>;
};

const Body = ({ children, className = "", ...props }) => {
  return <ul className={className}>{children}</ul>;
};

const Item = ({ children, className = "", ...props }) => {
  return <li className={className}>{children}</li>;
};
const Link = ({ children, className = "", href = "", ...props }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

Breadcrumbs.Body = Body;
Breadcrumbs.Item = Item;
Breadcrumbs.Link = Link;

export default Breadcrumbs;
