import React from "react";
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
    Icon
  } from "@chakra-ui/react";

<Icon viewBox='0 0 200 200' color='red.500'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>

const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props}>
        <path
        fill='currentColor'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
)

function HistoryItemCard() {
    
    return (
        <Flex
            flexDirection="column"
            color="black" 
            mt="2" >
            <HStack spacing={2} align="normal" >
                <CircleIcon boxSize={4} color="black" />
                <VStack >
                    <HStack >
                        <Text align="left" >
                            1.0
                        </Text>
                        <Text aligh="right" >
                            1/12/2021
                        </Text>
                    </HStack>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s 
                    </Text>
                </VStack>
            </HStack>
        </Flex>
    )
}
        
export default HistoryItemCard;
