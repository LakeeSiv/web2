import Head from "next/head";
import React from "react";

interface PropTypes {
  title: string;
}

const Layout: React.FC<PropTypes> = ({ title }) => {
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
    </div>
  );
};

export default Layout;
