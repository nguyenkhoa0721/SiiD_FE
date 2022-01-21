import { Box, Image, Flex, Text, Switch } from "@chakra-ui/react";

export const EditImage = ({galleryItem}) => {
  return (
    <Box position="relative">
      <Image src={galleryItem} alt="" borderRadius="15px" />
      <Box w="full" h="60px" position="absolute" bottom="0px">
        <Flex
          h="full"
          px="32px"
          direction="row"
          justifyContent="space-between"
          bgColor="transparent"
          alignItems="center"
          backdropFilter="saturate(200%) blur(50px)"
          borderRadius="0px 0px 15px 15px"
        >
          <Text fontSize="xl" color="white" fontWeight="semibold">
            Project01
          </Text>
          <Switch size="lg" colorScheme="green" />
        </Flex>
      </Box>
    </Box>
  );
};
