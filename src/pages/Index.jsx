import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#home" _hover={{ textDecoration: "none", color: "brand.700" }}>Home</Link>
              <Link href="#about" _hover={{ textDecoration: "none", color: "brand.700" }}>About</Link>
              <Link href="#contact" _hover={{ textDecoration: "none", color: "brand.700" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>Welcome to My Blog</Heading>
            <Text fontSize="lg">This is a place where I share my thoughts, experiences, and knowledge. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>Latest Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">Post Title 1</Heading>
                <Text mt={2}>This is a brief summary of the first blog post. Click to read more...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px">
                <Heading as="h4" size="md">Post Title 2</Heading>
                <Text mt={2}>This is a brief summary of the second blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
              <Link href="https://github.com" isExternal><FaGithub /></Link>
              <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;