// Chakra imports
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Spacer,
} from "@chakra-ui/react";

import { InfoIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import BarChart from "components/Charts/BarChart";
import OverviewProjCard from "components/Dashboard/OverviewProjCard";
import ChangeTimeline from "components/Dashboard/ChangeTimeline";
import StatChart from "components/Dashboard/StatChart";
import DonateBox from "components/Dashboard/DonateBox";
import VersionNotify from "components/Dashboard/VersionNotify";
export default function Dashboard() {
  return (
    <Flex
      overflow="auto"
      flexDirection="column"
      pt={{ base: "120px", md: "75px" }}
    >
      <SimpleGrid columns={1} spacing={4}>
        <VersionNotify />
        <DonateBox />
      </SimpleGrid>
      <Flex mt={4}>
        <OverviewProjCard flexIndex={2} />
        <StatChart />
      </Flex>
      <Flex mt={4}>
        <OverviewProjCard flexIndex={2} />
        <ChangeTimeline />
      </Flex>
    </Flex>
  );
}
