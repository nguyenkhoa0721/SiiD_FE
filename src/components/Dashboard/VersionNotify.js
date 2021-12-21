import { InfoIcon } from "@chakra-ui/icons";
import { Box, HStack,Text } from "@chakra-ui/react";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";

export default function VersionNotify() {
    return (
    <Box bg="white" w="100%" p={4} color="black" borderRadius="lg">
      <HStack spacing={2}>
        <InfoIcon color={GREEN_SHOPIFY} />
        <Text fontWeight="bold" fontSize="sm">
          Version 1.0: Welcome to SiiD!!! We want to give designers and buyers a
          good user experience. Read more....
        </Text>
      </HStack>
    </Box>
  );
}
