import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};

const LinkButton: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLButtonElement> & Props>
> = ({ children, to, className = "" }) => {
  return (
    <Link to={to}>
      <button className={`button-outlined ${className}`}>{children}</button>
    </Link>
  );
};

export default LinkButton;
