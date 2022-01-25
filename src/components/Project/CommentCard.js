import React from "react";
// Chakra imports
// Chakra imports
import {
  Flex,
  Grid,
  GridItem,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Spacer,
  VStack,
  Table,
  Th,
  Tr,
  Thead,
  Tbody,
  Image,
} from "@chakra-ui/react";

function CommentCard({ flexIndex, path, des, date }) {
  return (
    <Box flex={flexIndex} bg="white" p={4} borderRadius="lg">
      <HStack>
        <Image
          borderRadius="lg"
          src={path}
          alt="Dan Abramov"
          width="50px"
          heigh="50px"
        />
        <Box align="end">
          <Text
            fontSize="sm"
            color="gray.400"
            fontWeight="normal"
            align="start"
          >
            {date}
          </Text>
          <Text fontSize="md" color="dark" fontWeight="normal">
            {des}
          </Text>
        </Box>
        <Box>{/* hover button delete or edit here */}</Box>
      </HStack>
    </Box>
  );
}

export default CommentCard;
