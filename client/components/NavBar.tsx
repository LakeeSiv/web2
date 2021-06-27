// comopnent from https://chakra-templates.dev/navigation/navbar

import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
  LinkOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ThemePicker from "./Theme/ThemePicker";

const Links = ["Home", "About", "Projects", "Contact"];

interface NavLinkProps {
  children: ReactNode;
  link: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, link, active }) => {
  const bgColor = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("red.100", "red.800");
  const url = link === "Home" ? "/" : "/" + link.toLowerCase();

  return (
    <Link
      px={3}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: active ? activeColor : bgColor,
      }}
      href={url}
      // @ts-ignore
      bg={active ? activeColor : null}
      transitionProperty="colors"
      transitionDuration="slow"
      transitionTimingFunction="ease-out"
    >
      {children}
    </Link>
  );
};
interface NavBarProps {
  active_page: string;
}
const NavBar: React.FC<NavBarProps> = ({ active_page }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "rgba(19, 23, 32, 0.7)")}
        back
        px={4}
        transitionProperty="colors"
        transitionDuration="slow"
        transitionTimingFunction="ease-out"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            rounded="md"
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  link={link}
                  active={active_page === link ? true : false}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <ThemePicker />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  link={link}
                  active={active_page === link ? true : false}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
