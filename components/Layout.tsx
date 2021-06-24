import Head from "next/head";
import React from "react";
import NavBar from "./NavBar";
import ThemePicker from "./Theme/ThemePicker";

interface PropTypes {
  title: string;
  children?: React.ReactChild;
  active_page: string;
}

const Layout: React.FC<PropTypes> = ({ title, children, active_page }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="Lakee Sivaraya's Personal Website"
          content="This is Lakee's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active_page={active_page}></NavBar>
      {children}
    </div>
  );
};

export default Layout;
