import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <div>
      <Layout title="Home" active_page="Home">
        <Box
          bgColor={bgColor}
          transitionProperty="colors"
          transitionDuration="slow"
          transitionTimingFunction="ease-out"
        >
          Test
        </Box>
      </Layout>
    </div>
  );
}
