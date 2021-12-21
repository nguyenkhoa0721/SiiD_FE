import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";

import avatar from "assets/img/avatars/avatar.png";
import ProfileBgImage from "assets/img/ProfileBackground2.png";
import { MdEdit } from "react-icons/md";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Profile() {
  // const textColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("white", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  // const jobColor = useColorModeValue("gray.400", "gray.300");
  const jobColor = useColorModeValue("white", "white");
  return (
    <Flex direction="column">
      <Box
        // mb={{ sm: "205px", md: "75px", xl: "70px" }}
        mb="32px"
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Box
          bgImage={ProfileBgImage}
          w="100%"
          h="300px"
          borderRadius="25px"
          bgPosition="50%"
          bgRepeat="no-repeat"
          position="relative"
          display="flex"
          justifyContent="center"
        >
          {/* <Flex
            direction={{ sm: "column", md: "row" }}
            mx="1.5rem"
            maxH="330px"
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align="center"
            backdropFilter="saturate(200%) blur(50px)"
            position="absolute"
            boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
            border="2px solid"
            borderColor={borderProfileColor}
            bg={bgProfile}
            p="24px"
            borderRadius="20px"
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}
          >
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={avatar}
                w="80px"
                h="80px"
                borderRadius="15px"
              />
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight="bold"
                  ms={{ sm: "8px", md: "0px" }}
                >
                  Esthera Jackson
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={jobColor}
                  fontWeight="semibold"
                >
                  esthera@simmmple.com
                </Text>
              </Flex>
            </Flex>
          </Flex> */}
          <Flex
            align={{ sm: "center", md: "end" }}
            position={{ sm: "", md: "absolute" }}
            left="32px"
            bottom={"32px"}
            mt={{ sm: "20px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "end" }}
          >
            <Avatar
              me={{ md: "22px" }}
              position={{ md: "relative" }}
              src={avatar}
              w="200px"
              h="200px"
              borderRadius="full"
              border="4px"
              borderColor="whiteAlpha.50"
            >
              <Button
                position="absolute"
                right="0px"
                bottom="0px"
                w="30px"
                h="30px"
                p="0px"
                borderRadius="full"
              >
                <MdEdit color="#18A558" w="20px" h="20px" />
              </Button>
            </Avatar>
            <Flex direction="column" maxWidth="100%">
              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={jobColor}
                fontWeight="semibold"
              >
                Freelacer Designer
              </Text>
              <Text
                fontSize={{ sm: "xl", md: "2xl", lg: "4xl" }}
                color={textColor}
                fontWeight="bold"
                // ms={{ sm: "8px", md: "0px" }}
              >
                Tessa
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      {/* <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap="32px">
        <Card p="16px" my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Full Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Esthera Jackson
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Mobile:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  esthera@simmmple.com
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Location:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  United States
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  me="10px"
                >
                  Social Media:{" "}
                </Text>
                <Flex>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaFacebook} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaInstagram} />
                  </Link>
                  <Link
                    href="#"
                    color="teal.300"
                    fontSize="lg"
                    me="10px"
                    _hover={{ color: "teal.300" }}
                  >
                    <Icon as={FaTwitter} />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
        <Card p="16px">
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              Platform Settings
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="sm" color="gray.500" fontWeight="600" mb="20px">
                ACCOUNT
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone follows me
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone answers on my post
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Email me when someone mentions me
                </Text>
              </Flex>
              <Text
                fontSize="sm"
                color="gray.500"
                fontWeight="600"
                m="6px 0px 20px 0px"
              >
                APPLICATION
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  New launches and projects
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Monthly product changes
                </Text>
              </Flex>
              <Flex align="center" mb="20px">
                <Switch colorScheme="teal" me="10px" />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color="gray.500"
                  fontWeight="400"
                >
                  Subscribe to newsletter
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid> */}
    </Flex>
  );
}

export default Profile;
