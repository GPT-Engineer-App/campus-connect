import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Link, Stack, Text, Textarea, useToast, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSignInAlt, FaRobot } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSignIn = () => {
    setIsLoggedIn(true);
    toast({
      title: "Signed In",
      description: "You have successfully signed in.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setMessage("");
    toast({
      title: "Signed Out",
      description: "You have successfully signed out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const sendMessage = () => {
    toast({
      title: "Message Sent",
      description: message,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    setMessage("");
  };

  return (
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center" p={4}>
        <Heading as="h1" size="lg">
          University Info
        </Heading>
        {!isLoggedIn ? (
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleSignIn}>
            Sign In
          </Button>
        ) : (
          <Button colorScheme="red" onClick={handleSignOut}>
            Sign Out
          </Button>
        )}
      </Flex>

      <VStack spacing={4} p={4}>
        <Image src="https://images.unsplash.com/photo-1590231204765-12b10cedb4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzE0NTUwMTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Text fontSize="xl">Welcome to our University. Here you will find all the essential information about our programs, faculty, and campus life.</Text>
      </VStack>

      <Box as="footer" p={4}>
        <Stack direction="row" spacing={4} justify="center">
          <Link href="https://facebook.com" isExternal>
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram />
          </Link>
        </Stack>
      </Box>

      {isLoggedIn && (
        <Box p={4} mt={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Heading as="h2" size="md">
              Chat with Us <FaRobot />
            </Heading>
            <Textarea placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button colorScheme="blue" onClick={sendMessage}>
              Send Message
            </Button>
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default Index;
