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
import CustomTable from "components/Tables/CustomTable";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import { tablesTableData } from "variables/general";
import wrappedSpotify from "assets/img/Spotify-Wrapped-2021.jpg";
export default function OverviewProjCard({flexIndex}) {
  return (
    <Box shadow="lg" bg="white" p={4} mb={4} borderRadius="lg">
      <Text fontWeight="bold" fontSize="xl">
        Spotify 2021 Wrapped
      </Text>
      <Text fontSize="sm" fontWeight="bold" color={GREEN_SHOPIFY}>
        (+1) more days
      </Text>
      <Flex>
        <Box pt={4} pr={4} borderRadius="lg">
          <Image
            borderRadius="lg"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="md">
            Description
          </Text>
          <Text fontSize="sm">
            Additionally, now available on Spotify is the 2021 Wrapped hub,
            which features a variety of personalized, data-driven...
          </Text>
          <Text fontWeight="bold" fontSize="md">
            Participants
          </Text>
          <Table variant="simple" color="black">
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Author
                </Th>
                <Th color="gray.400">Function</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row) => {
                return (
                  <CustomTable
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
