import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import Terminal from "../components/Terminal";

export default function Home() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <div>
      <Layout title="Home" active_page="Home">
        <Terminal></Terminal>
      </Layout>
    </div>
  );
}
