import React, { FunctionComponent, HTMLProps, PropsWithChildren } from "react";

type PageSubtitleProps = {};

const PageSubtitle: FunctionComponent<
  PropsWithChildren<PageSubtitleProps & HTMLProps<HTMLHeadingElement>>
> = ({ children, className, ...rest }) => {
  return (
    <h3 className={`text-2xl ${className}`} {...rest}>
      {children}
    </h3>
  );
};

export default PageSubtitle;
