import React from "react";
import { useMatch } from "react-router-dom";
import { Link } from "react-router-dom";

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
        className={`px-8 py-3 text-xl rounded-md mx-2 ${
          match ? "bg-primary text-white " : ""
        }  hover:bg-primary  hover:text-white`}
      >
        {label}
      </li>
    </Link>
  );
};

export default NavItem;
