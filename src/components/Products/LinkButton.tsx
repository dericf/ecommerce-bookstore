import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Color } from "types/general";

type Props = {
  to: string;
  color?: Color;
};

const LinkButton: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLButtonElement> & Props>
> = ({ children, to, className = "", color = "primary" }) => {
  return (
    <Link to={to}>
      <button className={twMerge("button-outlined", className, color)}>
        {children}
      </button>
    </Link>
  );
};

export default LinkButton;
