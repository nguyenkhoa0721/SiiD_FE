import React from "react";
// Chakra imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
} from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
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
import ProfileBgImage from "assets/img/ProfileBackground3.png";
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
  // const textWhite = useColorModeValue("gray.700", "white");
  const textWhite = useColorModeValue("white", "black");
  const textBlack = useColorModeValue("black", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const borderProfileColor = useColorModeValue(
    "white",
    "rgba(255, 255, 255, 0.31)"
  );
  const borderAvatar = useColorModeValue("white", "white");
  const buttonEditColor = useColorModeValue("white", "white");

  const { id, isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column">
      <Box
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
          alignItems={{ sm: "center", md: "end" }}
        >
          <Flex
            align={{ sm: "center", md: "end" }}
            position={{ sm: "", md: "absolute" }}
            left="32px"
            bottom={"32px"}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "end" }}
          >
            <Avatar
              me={{ md: "22px" }}
              position="relative"
              src={avatar}
              w="200px"
              h="200px"
              borderRadius="full"
              border="4px"
              borderColor={borderAvatar}
            >
              <Button
                position="absolute"
                right="5px"
                bottom="5px"
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={buttonEditColor}
              >
                <MdEdit color="#18A558" w="20px" h="20px" />
              </Button>
            </Avatar>
            <Flex direction="column" maxWidth="100%">
              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={textWhite}
                fontWeight="semibold"
              >
                Freelacer Designer
              </Text>
              <Text
                fontSize={{ sm: "xl", md: "2xl", lg: "4xl" }}
                color={textWhite}
                fontWeight="bold"
              >
                Tessa
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Grid
        templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }}
        gap="32px"
        mt="32px"
      >
        <Card p="32px" boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)">
          <Box
            w="full"
            h="60px"
            bgColor="#18A558"
            borderRadius="15px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              pl="32px"
              pr="10px"
            >
              <Text fontSize="lg" color={textWhite} fontWeight="bold" my="17px">
                Your Profiles
              </Text>
              <Button
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={buttonEditColor}
                onClick={onOpen}
              >
                <MdEdit color="#18A558" w="20px" h="20px" />
              </Button>

              <Modal
                id="editProfileDialog"
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size="2xl"
                closeOnOverlayClick={false}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader p="0px">
                    <Box
                      w="full"
                      h="60px"
                      bgColor="#008060"
                      borderRadius="5px 5px 0px 0px"
                      pl="32px"
                    >
                      <Flex justifyContent="space-between" align="center">
                        <Text
                          my="12px"
                          fontSize="2xl"
                          color={textWhite}
                          fontWeight="semibold"
                        >
                          Edit Profiles
                        </Text>
                        <ModalCloseButton mt="5px"></ModalCloseButton>
                      </Flex>
                    </Box>
                  </ModalHeader>
                  <ModalBody p="32px">
                    <FormControl experimental_spaceY="32px">
                      <Input
                        id="name"
                        type="name"
                        placeholder="Full name*"
                        required
                        h="50px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      />
                      <Input
                        id="job"
                        type="job"
                        placeholder="Current job*"
                        required
                        h="50px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      />
                      <Input
                        id="country"
                        type="country"
                        placeholder="Country*"
                        required
                        h="50px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email*"
                        required
                        h="50px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      />
                      <Input
                        id="phone-number"
                        type="number"
                        placeholder="Phone number"
                        h="50px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      />
                      <Textarea
                        id="description"
                        type=""
                        placeholder="Description"
                        h="200px"
                        color="black"
                        fontSize="lg"
                        borderColor="black"
                      ></Textarea>
                    </FormControl>
                  </ModalBody>

                  <ModalFooter
                    p="0px 32px 32px 32px"
                    experimental_spaceX="32px"
                  >
                    <Button color="white" colorScheme="green">
                      Save
                    </Button>
                    <Button color="black" colorScheme="gray" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Box>
          <Box
            w="full"
            h="full"
            bgColor="#F8F9FA"
            borderRadius="15px"
            mt="32px"
            p="32px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex
              alignItems="left"
              direction="row"
              justifyContent="space-between"
              direction="column"
            >
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Full Name:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Tesa Violet
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Current job:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Freelancer Designer
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Country:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  Viet Nam
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Email:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  tessavio@gmail.com
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Phone number:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400">
                  0123456789
                </Text>
              </Flex>
              <Flex align="center" mb="18px" alignItems="start">
                <Text
                  fontSize="md"
                  color={textBlack}
                  fontWeight="bold"
                  me="10px"
                >
                  Descriptions:{" "}
                </Text>
                <Text fontSize="md" color="gray.500" fontWeight="400" mb="30px">
                  Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Card>
        <Card p="32px" boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)">
          <Box
            w="full"
            h="60px"
            bgColor="#18A558"
            borderRadius="15px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              pl="32px"
              pr="10px"
            >
              <Text fontSize="lg" color={textWhite} fontWeight="bold" my="17px">
                Platform Settings
              </Text>
            </Flex>
          </Box>
          <Box
            w="full"
            h="full"
            bgColor="#F8F9FA"
            borderRadius="15px"
            mt="32px"
            p="32px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex direction="column">
              <Text fontSize="sm" color="gray.500" fontWeight="600" mb="20px">
                ACCOUNT
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="green" me="10px" />
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
                <Switch colorScheme="green" me="10px" />
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
                <Switch colorScheme="green" me="10px" />
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
                <Switch colorScheme="green" me="10px" />
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
                <Switch colorScheme="green" me="10px" />
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
                <Switch colorScheme="green" me="10px" />
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
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;
