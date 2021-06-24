import Head from "next/head";
import React from "react";
import ThemePicker from "./Theme/ThemePicker";

interface PropTypes {
  title: string;
  children?: React.ReactChild;
}

const Layout: React.FC<PropTypes> = ({ title, children }) => {
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
      <ThemePicker></ThemePicker>
      {children}
    </div>
  );
};

export default Layout;
