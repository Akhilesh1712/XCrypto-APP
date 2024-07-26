import { Avatar, Box, HStack, Stack, Text, VStack, Link, IconButton } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} spacing={["8", "24"]} h={"full"} alignItems={"center"} justify={"space-between"} px={"16"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            maxW={"300px"}
          >
            We are the best crypto trading app in India, providing our guidance
            at a very affordable price.
          </Text>
        </VStack>

        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>Quick Links</Text>
          <Link href="/home" fontSize={"sm"}>Home</Link>
          <Link href="/coins" fontSize={"sm"}>Coins</Link>
          <Link href="/exchanges" fontSize={"sm"}>Exchanges</Link>
          <Link href="/contact" fontSize={"sm"}>Contact Us</Link>
        </VStack>

        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>Follow Us</Text>
          <HStack spacing={"4"}>
            <Link href="https://www.instagram.com/__akhilesh200__/" isExternal>
              <IconButton icon={<FaInstagram />} aria-label="Instagram" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://x.com/explore" isExternal>
              <IconButton icon={<FaTwitter />} aria-label="Twitter" colorScheme="whiteAlpha" />
            </Link>
            <Link href="https://www.linkedin.com/in/akhilesh-kumar-7a6857248/" isExternal>
              <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" colorScheme="whiteAlpha" />
            </Link>
          </HStack>
        </VStack>

        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>Contact Us</Text>
          <Text fontSize={"sm"}>Email: akhileshkr17122002@gmail.com</Text>
          <Text fontSize={"sm"}>Phone: +91 xxxxxxxxx</Text>
        </VStack>
      </Stack>
      <Text textAlign={"center"} py={"4"} fontSize={"sm"} color={"whiteAlpha.500"}>
        © 2024 Xcrypto. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
