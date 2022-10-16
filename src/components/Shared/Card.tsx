import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Card: FunctionComponent<
  PropsWithChildren<Props & HTMLAttributes<HTMLDivElement>>
> = ({ children, className, ...rest }) => {
  return (
    <div
      className={twMerge(
        "shadow-2xl px-8 py-4 w-full h-full bg-white backdrop-blur-lg mt-8",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
