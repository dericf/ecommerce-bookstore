import React, { FunctionComponent, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
import "react-toastify/dist/ReactToastify.css";

type LayoutProps = {};

const Layout: FunctionComponent<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  <NavBar />;
  return (
    <div className="w-screen h-screen mx-auto bg-white">
      <NavBar />
      <main className="main-content container max-w-6xl px-8 py-10 mx-auto">
        {children}
      </main>
      <ToastContainer
        autoClose={3000}
        position="bottom-right"
        hideProgressBar
      />
    </div>
  );
};

export default Layout;
