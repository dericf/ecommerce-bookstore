import React, { FunctionComponent, PropsWithChildren } from "react";
import NavBar from "./NavBar";

type LayoutProps = {};

const Layout: FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  <NavBar />;
  return (
    <div className="w-screen h-screen mx-auto bg-white">
      <NavBar />
      <main className="main-content container max-w-6xl px-8 py-16 mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
