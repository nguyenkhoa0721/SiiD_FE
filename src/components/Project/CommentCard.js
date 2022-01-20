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

function CommentCard({flexIndex, version, des, date}) {
    return (
        <Box flex={flexIndex} bg="white" p={4} borderRadius="lg">
            <Text fontWeight="bold" fontSize="xl">
                {version}
                {des}
                {date}
            </Text>
        </Box>
    )
}

export default CommentCard;
