import React, { useEffect, useRef } from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Typed from "typed.js";

const Terminal: React.FC = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    let data = {
      name: "Lakeeshan (Lakee) Sivaraya",
      occupation: "1st Year Student",
      university: "University of Cambridge",
      subject: "Engineering",
      skills: ["Python", "Javascript/Typescript", "HTML/CSS", "git"],
    };

    let stats = JSON.stringify(data, null, 4);
    stats = "`" + stats + "`";
    let text = [
      "`~\\Desktop\\stats>`^1000 ls^1000\n `lakee.py`\n`~\\Desktop\\stats>`^1000 python ^1000 \n `Python 3.8.3`\n `>>>`^1000 <span style='color:#FF1493'>import</span> lakee ^1000 \n `>>>`^1000 <span style='color:#0080FF'>print(</span>lakee<span style='color:#0080FF'>.get_stats()</span><span style='color:#0080FF'>)</span>^1000\n".concat(
        `${stats}`
      ),
    ];

    const options = {
      strings: text,
      typeSpeed: 50,
      backSpeed: 50,
    };

    // @ts-ignore
    typed.current = new Typed(el.current, options);

    return () => {
      // @ts-ignore
      typed.current!.destroy();
    };
  }, []);

  return (
    <div>
      <VStack>
        <Heading>Hi</Heading>
        <Box width="80vw" bgColor="red.100" border="1px" borderRadius="md">
          <span
            ref={el}
            style={{ whiteSpace: "pre", fontFamily: "monospace" }}
          ></span>
        </Box>
      </VStack>
    </div>
  );
};

export default Terminal;
