"use client";
import React from "react";

const Menu = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`menu ${className}`}>
      {children}
    </div>
  );
};

const Section = ({ children, className = "", ...props }) => {
  return (
    <section {...props} className={`menu-section ${className}`}>
      {children}
    </section>
  );
};
const Title = ({ children, className = "", ...props }) => {
  return (
    <div {...props} className={`menu-title ${className}`}>
      {children}
    </div>
  );
};
const Items = ({ children, className = "", ...props }) => {
  return (
    <ul {...props} className={`menu-items ${className}`}>
      {children}
    </ul>
  );
};
const Item = ({ children, className = "", ...props }) => {
  return (
    <li {...props} className={`menu-item ${className}`}>
      {children}
    </li>
  );
};

const Toggle = (id) => {
  return <input type="checkbox" id={`menu-${id}`} class="menu-toggle" />;
};

Menu.Section = Section;
Menu.Title = Title;
Menu.Items = Items;
Menu.Item = Item;
Menu.Toggle = Toggle;

export default Menu;
