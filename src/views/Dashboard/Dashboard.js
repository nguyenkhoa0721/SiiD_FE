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
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import LineChart from "components/Charts/LineChart";
import BarChart from "components/Charts/BarChart";
import { tablesTableData } from "variables/general";
import TablesTableRow from "components/Tables/TablesTableRow";
import CustomTable from "components/Tables/CustomTable";
import OverviewProjCard from "components/Dashboard/OverviewProjCard";

export default function Dashboard() {
  return (
    <Flex
      overflow="auto"
      flexDirection="column"
      pt={{ base: "120px", md: "75px" }}
    >
      <SimpleGrid columns={1} spacing={4}>
        <Box bg="white" w="100%" p={4} color="black" borderRadius="lg">
          <HStack spacing={2}>
            <InfoIcon color={GREEN_SHOPIFY} />
            <Text fontWeight="bold" fontSize="sm">
              Version 1.0: Welcome to SiiD!!! We want to give designers and
              buyers a good user experience. Read more....
            </Text>
          </HStack>
        </Box>
        <Box
          bg={GREEN_SHOPIFY}
          w="100%"
          pl={6}
          pr={4}
          pt={10}
          pb={10}
          color="white"
          borderRadius="lg"
        >
          <Flex alignItems="center">
            <Text fontWeight="bold" fontSize="xl">
              Donate for us a cup of coffee to make our website more useful
            </Text>
            <Spacer />
            <Button bg="white" color="black">
              Buy me a coffee
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
      <Flex mt={4}>
        <OverviewProjCard flexIndex={2} />
        <Box flex="1" bg="white" p={4} ml={4} borderRadius="lg">
          <Text fontSize="md" fontWeight="bold" mb="2px">
            Number of changes
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>
            In the last 30 days
          </Text>
          <BarChart/>
        </Box>
      </Flex>
      <Flex mt={4}>
        <OverviewProjCard flexIndex={2} />
        <Box flex={1} bg="white" p={4} ml={4} borderRadius="lg">
          <Text fontSize="md" fontWeight="bold" mb="2px">
            Testing
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>
            This is a placeholder for coding
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
