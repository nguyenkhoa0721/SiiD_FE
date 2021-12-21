import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
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
import galleryItem from "assets/img/galleryItem.png";
import ProfileBgImage from "assets/img/ProfileBackground2.png";
import { MdEdit } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";

function Portfolio() {
  const textWhite = useColorModeValue("white", "black");
  const textBlack = useColorModeValue("black", "white");

  const borderAvatar = useColorModeValue("white", "white");
  const buttonEditColor = useColorModeValue("white", "white");
  return (
    <Flex direction="column">
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
              Your Portfolio
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
          <Grid
            templateColumns={{ sm: "1fr", xl: "repeat(4, 1fr)" }}
            gap="32px"
          >
            <GridItem colSpan={1}>
              <Box
                w="full"
                h="full"
                borderRadius="15px"
                p="32px"
                bgColor="white"
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                justifyContent="center"
              >
                <Flex alignItems="center" direction="column">
                  <Avatar
                    src={avatar}
                    w="200px"
                    h="200px"
                    borderRadius="full"
                    border="4px"
                    borderColor={borderAvatar}
                  />
                  <Flex
                    mt="20px"
                    direction="row"
                    experimental_spaceX="8px"
                    justifyContent="space-between"
                  >
                    <AiFillStar size="35px" color="yellow" />
                    <AiFillStar size="35px" color="yellow" />
                    <AiFillStar size="35px" color="yellow" />
                    <AiFillStar size="35px" color="yellow" />
                    <AiFillStar size="35px" color="yellow" />
                  </Flex>
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                w="full"
                h="full"
                borderRadius="15px"
                p="32px"
                bgColor="white"
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                placeItems="center"
                justifyItems="center"
                alignItems="center"
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
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex
                w="full"
                h="full"
                borderRadius="15px"
                p="32px"
                bgColor="white"
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                placeItems="start"
                justifyItems="center"
                alignItems="center"
              >
                <Flex align="start" alignItems="start">
                  <Text
                    fontSize="md"
                    color={textBlack}
                    fontWeight="bold"
                    me="10px"
                  >
                    Descriptions:{" "}
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.500"
                    fontWeight="400"
                    mb="30px"
                  >
                    Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
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
                Gallery
              </Text>

              <Button
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={buttonEditColor}
              >
                <MdEdit color="#18A558" w="20px" h="20px" />
              </Button>
            </Flex>
          </Box>

          <Grid
            mt="32px"
            templateRows={{ sm: "1fr", xl: "repeat(3, 1fr)" }}
            templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }}
            gap="32px"
          >
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
            <Image src={galleryItem} alt="" borderRadius="15px" />
          </Grid>
        </Box>
      </Card>
    </Flex>
  );
}

export default Portfolio;
