import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";

export default function DonateBox() {
  return (
    <Box
      bg={GREEN_SHOPIFY}
      w="100%"
      pl={6}
      pr={4}
      pt={10}
      pb={10}
      mb={4}
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
  );
}
