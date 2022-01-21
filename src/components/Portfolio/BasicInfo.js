import { Flex, Text } from "@chakra-ui/react";
import { BLACK } from "utils/const/ColorChoice";
import { TEXT_COLOR } from "utils/const/ColorChoice";
import React from "react";
export const BasicInfo = ({fullName, job, country, email, phoneNumber}) => {
  return (
    <React.Fragment>
      <Flex align="center" mb="18px">
        <Text fontSize="md" color={TEXT_COLOR} fontWeight="bold" me="10px">
          Full Name:{" "}
        </Text>
        <Text fontSize="md" color={BLACK} fontWeight="400">
          {fullName}
        </Text>
      </Flex>
      <Flex align="center" mb="18px">
        <Text fontSize="md" color={TEXT_COLOR} fontWeight="bold" me="10px">
          Current job:{" "}
        </Text>
        <Text fontSize="md" color={BLACK} fontWeight="400">
          {job}
        </Text>
      </Flex>
      <Flex align="center" mb="18px">
        <Text fontSize="md" color={TEXT_COLOR} fontWeight="bold" me="10px">
          Country:{" "}
        </Text>
        <Text fontSize="md" color={BLACK} fontWeight="400">
          {country}
        </Text>
      </Flex>
      <Flex align="center" mb="18px">
        <Text fontSize="md" color={TEXT_COLOR} fontWeight="bold" me="10px">
          Email:{" "}
        </Text>
        <Text fontSize="md" color={BLACK} fontWeight="400">
          {email}
        </Text>
      </Flex>
      <Flex align="center" mb="18px">
        <Text fontSize="md" color={TEXT_COLOR} fontWeight="bold" me="10px">
          Phone:{" "}
        </Text>
        <Text fontSize="md" color={BLACK} fontWeight="400">
          {phoneNumber}
        </Text>
      </Flex>
    </React.Fragment>
  );
};
