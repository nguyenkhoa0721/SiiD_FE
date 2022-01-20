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
  ButtonGroup,
  Stack,
  Input
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, AtSignIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import { tablesTableData } from "variables/general";
import CommentCard from "components/Project/CommentCard";
import HistoryItemCard from "components/Project/HistoryItemCard";

const InputComment = () => (
  <HStack>
    <Input 
      placeholder='Send message herer' 
      color={GREEN_SHOPIFY}
      variant="ghost" />
      <ButtonGroup>
        <Button variant="link">
          <AtSignIcon/>
          Pay
        </Button>
        <Button variant="link">
          <AtSignIcon/>
          Send
        </Button>
      </ButtonGroup>
  </HStack>
)

function Project() {
  const [emptyProject, setEmptyProject] = useState(true);
  return (
    <Flex
      overflow="auto" 
      flexDirection="row"
      pt={{ base: "120px", md: "75px" }}
    >
      <Flex
      overflow="auto" 
      flexDirection="column"
      height="2/3"
      mr="8"
      >
        <Box bg="white" w="100%" color="black" borderRadius="lg" pl="4" pr="4" mb="8">
          <Box
            bg={GREEN_SHOPIFY}
            w="100%"
            pl={6}
            pr={4}
            color="white"
            borderRadius="lg"
          >
            <Text fontWeight="bold" fontSize="xl">
              Version 3.0: Change color pallete 
              
            </Text>
          </Box>
          <Box>
            <ButtonGroup>
            <Stack direction='row' spacing={4} align='center'>
              <Button variant="ghost">
                <AtSignIcon/>
                Change view
              </Button>
              <Button variant="ghost">
                <AtSignIcon/>
                Change view
              </Button>
              <Button variant="ghost">
                <AtSignIcon/>
                Project Setting
              </Button>
            </Stack>
            </ButtonGroup>
            <Box pt={4} pr={4} borderRadius="lg">
              <Image
                borderRadius="lg"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
            />
            <Stack direction='row' spacing={4} align='center'>
              <Button variant="ghost">
                <AtSignIcon/>
                Iterate Left
              </Button>
              <Text>
                1
              </Text>
              <Button variant="ghost">
                <AtSignIcon/>
                Iterate Right
              </Button>
              <Button variant="ghost">
                <AtSignIcon/>
                Upload
              </Button>
            </Stack>
          </Box>
          </Box>
        </Box>
        <Box bg="white" w="100%" p={4} color="black" borderRadius="lg">
          <Box
            bg={GREEN_SHOPIFY}
            w="100%"
            pl={6}
            pr={4}
            color="white"
            borderRadius="lg"
          >
            <Text fontWeight="bold" fontSize="xl">
              Review
            </Text>
          </Box>
          <Flex>
            <Flex>
              <CommentCard/>
            </Flex>
            <InputComment/>
          </Flex>
        </Box>
      </Flex>
      <Flex
        width={1/3}
        flexDirection="column"
        bg="white"
      >
        <Flex
          bg={GREEN_SHOPIFY}
          w="100%"
          pl={6}
          pr={4}
          color="white"
          borderRadius="lg"
          >
          <HStack spacing={2} >
            <Button variant="link">
              <ArrowRightIcon w={4} h={4} color="white" />
            </Button>
            <Text fontWeight="bold" fontSize="xl">
              History
            </Text>
          </HStack>
        </Flex>
        <HistoryItemCard />
        <HistoryItemCard />
      </Flex>
    </Flex>
  );
}

export default Project;
