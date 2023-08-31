"use client";
import React from "react";

const Avatar = ({ children, className = "" }) => {
  return <div className={`avatar ${className}`}>{children}</div>;
};

export default Avatar;
