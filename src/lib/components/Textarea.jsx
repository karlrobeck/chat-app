import React from "react";

const Textarea = ({ className = "", placeholder = "", ...props }) => {
  return (
    <textarea
      {...props}
      className={`textarea ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
