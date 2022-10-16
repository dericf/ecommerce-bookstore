import React from "react";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Props = {
  to: string;
  activeOnlyWhenExact?: boolean;
  label: string;
};

const NavItem = ({ to, activeOnlyWhenExact = false, label }: Props) => {
  let match = useMatch(to);
  return (
    <Link to={to} className="no-underline">
      <li
        className={twMerge(
          "px-8 py-3 text-xl rounded-md mx-2 text-neutral font-semibold",
          match ? "bg-primary text-white " : "",
          "hover:bg-primary  hover:text-white",
        )}
      >
        {label}
      </li>
    </Link>
  );
};

export default NavItem;
