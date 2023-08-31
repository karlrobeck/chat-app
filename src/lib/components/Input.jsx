"use client";
import React from "react";

const Input = ({
  className = "",
  placeholder = "",
  type = "text",
  ...props
}) => {
  return (
    <input
      {...props}
      className={`input ${className}`}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
