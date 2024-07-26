import { Box, HStack, Image, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box bgColor={"blackAlpha.900"} p={4} shadow={"base"}>
      <HStack justifyContent={"space-between"} alignItems={"center"} maxW={"1200px"} mx={"auto"}>
        {/* Logo Placeholder */}
        <Link to="/">
          <Image src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720051200&semt=ais_user" alt="Logo" boxSize="50px" objectFit="contain" />
        </Link>

        {/* Navigation Links */}
        <HStack spacing={8}>
          <Button variant={"link"} color={"white"} _hover={{ textDecoration: 'underline', color: 'teal.300' }}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={"link"} color={"white"} _hover={{ textDecoration: 'underline', color: 'teal.300' }}>
            <Link to="/Exchanges">Exchanges</Link>
          </Button>
          <Button variant={"link"} color={"white"} _hover={{ textDecoration: 'underline', color: 'teal.300' }}>
            <Link to="/Coins">Coins</Link>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
