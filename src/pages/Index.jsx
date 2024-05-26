import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Spacer, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Post Title 1", content: "This is a brief summary of the first blog post. Click to read more..." },
    { title: "Post Title 2", content: "This is a brief summary of the second blog post. Click to read more..." }
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [postToDelete, setPostToDelete] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "" });
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
    setPostToDelete(null);
  };

  const confirmDelete = (index) => {
    setPostToDelete(index);
  };

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color}>
      {/* Navigation Bar */}
      <Box as="nav" bg={useColorModeValue("brand.800", "gray.700")} color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#home" color="white">Home</Link>
              <Link href="#about" color="white">About</Link>
              <Link href="#contact" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a place where I share my thoughts and experiences on various topics. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Add a New Post</Heading>
            <Box as="form" onSubmit={handleSubmit} mt={4}>
              <VStack spacing={4} align="stretch">
                <Input
                  placeholder="Title"
                  name="title"
                  value={newPost.title}
                  onChange={handleInputChange}
                  required
                />
                <Textarea
                  placeholder="Content"
                  name="content"
                  value={newPost.content}
                  onChange={handleInputChange}
                  required
                />
                <Button type="submit" colorScheme="blue">Add Post</Button>
              </VStack>
            </Box>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="stretch">
              {posts.map((post, index) => (
                <Box key={index} p={5} shadow="md" borderWidth="1px">
                  <Heading as="h4" size="md">{post.title}</Heading>
                  <Text mt={2}>{post.content}</Text>
                  <Button colorScheme="red" onClick={() => confirmDelete(index)}>Delete</Button>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
        {postToDelete !== null && (
          <Box mt={4}>
            <Text>Are you sure you want to delete this post?</Text>
            <Button colorScheme="red" onClick={() => handleDelete(postToDelete)}>Yes</Button>
            <Button onClick={() => setPostToDelete(null)}>No</Button>
          </Box>
        )}
      </Container>

      {/* Footer */}
      <Box as="footer" bg={useColorModeValue("brand.800", "gray.700")} color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <Spacer />
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;