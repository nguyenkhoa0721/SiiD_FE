// Chakra imports
import {
  Flex,
  Box,
  SimpleGrid,
  Text,
  HStack,
  Button,
  Spacer,
  List,
  ListIcon,
  ListItem,
  Avatar,
  VStack, 
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
function ChangeTimelineCard(){
    return(
        <HStack>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" size="sm" />
        <Box>
          <Text fontSize="sm" fontWeight="bold" mb="1" color="green.500">Change color pallete</Text>
          <Text fontSize="sm" fontWeight="bold">Anh soái ca</Text>
        </Box>
      </HStack>
    );
}
export default function ChangeTimeline() {
  return (
    <Box shadow="lg" flex={1} bg="white" p={4} ml={4} borderRadius="lg">
      <Text fontSize="md" fontWeight="bold" mb="2px">
        Recent changes
      </Text>

      <Text fontSize="sm" fontWeight="medium" color="gray.400" mb={2}>
        What you have done recently
      </Text>
      <SimpleGrid columns={1} spacing={2}>
          <ChangeTimelineCard/>
          <ChangeTimelineCard/>
          <ChangeTimelineCard/>
          <ChangeTimelineCard/>
          <ChangeTimelineCard/>
      </SimpleGrid>
    </Box>
  );
}
