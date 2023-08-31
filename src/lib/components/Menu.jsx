"use client";
import React from "react";

const Menu = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`menu ${className}`}>
      {children}
    </div>
  );
};

Menu.Section = ({ children, className = "", ...props }) => {
  return (
    <section {...props} className={`menu-section ${className}`}>
      {children}
    </section>
  );
};
Menu.Title = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`menu-title ${className}`}>
      {children}
    </div>
  );
};
Menu.Items = ({ children, className = "", ...props }) => {
  return (
    <ul {...props} className={`menu-items ${className}`}>
      {children}
    </ul>
  );
};
Menu.Item = ({ children, className = "", ...props }) => {
  return (
    <li {...props} className={`menu-item ${className}`}>
      {children}
    </li>
  );
};

Menu.Toggle = (id) => {
  return <input type="checkbox" id={`menu-${id}`} class="menu-toggle" />;
};

export default Menu;
