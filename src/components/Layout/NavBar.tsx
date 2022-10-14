import React from "react";
import NavItem from "./NavItem";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Cart", path: "/cart" },
];

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="w-screen bg-gray-veryLight py-2">
      <ul className="flex decoration-0">
        {NAV_ITEMS.map((link) => (
          <NavItem key={link.path} to={link.path} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
