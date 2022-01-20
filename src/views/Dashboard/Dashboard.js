// Chakra imports
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Spacer,
  VStack,
  Grid,
  GridItem
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
      <Grid templateColumns='repeat(6, 1fr)' gap={1}>
        <GridItem colSpan={4}>
          <OverviewProjCard flexIndex={1} />
          <OverviewProjCard flexIndex={1} />
          <OverviewProjCard flexIndex={1} />
        </GridItem>
        <GridItem colSpan={2}>
          <StatChart />
          <ChangeTimeline />
        </GridItem>
      </Grid>
    </Flex>
  );
}
