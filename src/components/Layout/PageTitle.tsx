import React, { FunctionComponent, PropsWithChildren } from "react";

type PageTitleProps = {};

const PageTitle: FunctionComponent<PropsWithChildren<PageTitleProps>> = ({
  children,
}) => {
  return (
    <>
      <h2 className="text-4xl">{children}</h2>
      <hr className="mb-4" />
    </>
  );
};

export default PageTitle;
