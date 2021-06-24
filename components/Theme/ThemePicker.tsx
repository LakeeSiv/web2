import React, { useState } from "react";
import { IconButton, useColorMode, Box } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemePicker: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={5} mr={{ base: 5, lg: 10 }}>
      <DarkModeToggle
        onChange={toggleColorMode}
        checked={colorMode === "dark" ? true : false}
        size={80}
      />
      <IconButton
        aria-label="hi"
        colorScheme={colorMode}
        onClick={toggleColorMode}
        variant="ghost"
        size="lg"
        icon={
          colorMode === "light" ? <FaSun size={30} /> : <FaMoon size={30} />
        }
        alignSelf="flex-end"
      />
    </Box>
  );
};

export default ThemePicker;
