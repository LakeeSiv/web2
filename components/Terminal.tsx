import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";

const Terminal: React.FC = () => {
  return (
    <div>
      <VStack>
        <Heading>Hi</Heading>
      </VStack>
      <Box width="50vw" bg="red.100"></Box>
    </div>
  );
};

export default Terminal;
