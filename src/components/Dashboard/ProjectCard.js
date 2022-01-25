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
import dayjs from "dayjs";
import CustomTable from "components/Tables/CustomTable";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import { tablesTableData } from "variables/general";
import wrappedSpotify from "assets/img/Spotify-Wrapped-2021.jpg";
import { BASE_URL } from "utils/path/internalPaths";
export default function ProjectCard({ data }) {
  return (
    !!data && (
      <Box
        shadow="lg"
        bg="white"
        p={4}
        mb={4}
        borderRadius="lg"
        cursor="pointer"
        _hover={{ shadow: "2xl" }}
        height="full"
      >
        {console.log(data)}
        <Box
          w="full"
          // h="60px"
          bgColor={GREEN_SHOPIFY}
          borderRadius="15px"
          boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
        >
          <Flex
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            px="17px"
          >
            <Text fontSize="lg" color="white" fontWeight="bold" my="8px">
              {data.projectName}
            </Text>
          </Flex>
        </Box>
        <Flex>
          <Box pt={4} pr={4} borderRadius="lg" experimental_spaceY="8px">
            <Image
              borderRadius="lg"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
            <Text fontSize="sm" fontWeight="bold" color={GREEN_SHOPIFY}>
              Create date: {dayjs(data.createdAt).format("DD/MM/YYYY")}
            </Text>
            <Text fontSize="sm" fontWeight="bold" color={GREEN_SHOPIFY}>
              Last updated: {dayjs(data.updatedAt).format("DD/MM/YYYY")}
            </Text>
          </Box>
          <Box>
            <Table variant="simple" color="black">
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400">
                  <Th pl="0px" color="gray.400">
                    Participants
                  </Th>
                  <Th color="gray.400">Roll</Th>
                </Tr>
              </Thead>
              <Tbody>
                <CustomTable
                  name={data.owner.name}
                  logo={BASE_URL + "/" + data.owner.avatar}
                  email={data.owner.email}
                  subdomain={data.owner.job}
                  domain="Owner"
                />
                {!!data.clients &&
                  data.clients.map((row) => {
                    return (
                      <CustomTable
                        name={row.name}
                        logo={BASE_URL + "/" + row.avatar}
                        email={row.email}
                        subdomain={row.job}
                        domain="Client"
                      />
                    );
                  })}
                {!!data.designers &&
                  data.designers.map((row) => {
                    return (
                      <CustomTable
                        name={row.name}
                        logo={BASE_URL + "/" + row.avatar}
                        email={row.email}
                        subdomain={row.job}
                        domain="Designer"
                      />
                    );
                  })}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    )
  );
}
