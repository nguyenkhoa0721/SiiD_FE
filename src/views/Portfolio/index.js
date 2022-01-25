import React, { useContext, useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  GREEN_SHOPIFY,
  TEXT_COLOR,
  GRAY2,
  BLACK,
  WHITE,
} from "utils/const/ColorChoice";
import Card from "components/Card/Card";

import avatar from "assets/img/avatars/avatar.png";
import galleryItem0 from "assets/img/galleryItem0.png";
import galleryItem1 from "assets/img/galleryItem1.png";
import galleryItem2 from "assets/img/galleryItem2.png";
import { MdEdit } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { EditImage } from "components/Portfolio/EditImage";
import { BasicInfo } from "components/Portfolio/BasicInfo";
import axios from "axios";
import { GET_ALL_PORTFOLIO } from "utils/path/internalPaths";
import { AuthenticationContext } from "store/AuthenticationContext";
import { isNull, isUndefined } from "lodash";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "utils/path/internalPaths";

function Portfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const borderAvatar = useColorModeValue("white", "white");
  const buttonEditColor = useColorModeValue("white", "white");
  const { state, update } = useContext(AuthenticationContext);
  const [dataVal, setDataVal] = useState();
  const history = useHistory();
  useEffect(() => {
    history.push({ pathname: "/admin/portfolio" });
    loadPortfolioInfo();
  }, []);
  const loadPortfolioInfo = () => {
    axios
      .get(GET_ALL_PORTFOLIO, {
        headers: {
          Authorization: `Bearer ${state.bearerToken}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setDataVal(data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const dataGallery = [
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
    "https://source.unsplash.com/random/2000x2000",
  ];
  return (
    <Flex pt={{ base: "120px", md: "75px" }} direction="column">
      <Card p="24px" boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)">
        <Box
          w="full"
          h="60px"
          bgColor={GREEN_SHOPIFY}
          borderRadius="15px"
          boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
        >
          <Flex
            alignItems="center"
            direction="row"
            justifyContent="space-between"
            pl="24px"
            pr="10px"
          >
            <Text fontSize="lg" color="white" fontWeight="bold" my="17px">
              Your Portfolio
            </Text>
          </Flex>
        </Box>
        <Box
          w="full"
          h="full"
          bgColor={GRAY2}
          borderRadius="15px"
          mt="24px"
          p="24px"
          boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
        >
          <Grid
            templateColumns={{ sm: "1fr", xl: "repeat(4, 1fr)" }}
            gap="24px"
          >
            <GridItem colSpan={1}>
              <Box
                w="full"
                h="full"
                borderRadius="15px"
                p="32px"
                bgColor={WHITE}
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                justifyContent="center"
              >
                <Flex alignItems="center" direction="column">
                  <Avatar
                    src={BASE_URL + "/" + dataVal?.createdBy?.avatar}
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
                bgColor={WHITE}
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                placeItems="center"
                justifyItems="center"
                alignItems="center"
              >
                <Flex
                  alignItems="left"
                  justifyContent="space-between"
                  direction="column"
                >
                  <BasicInfo
                    fullName={dataVal?.createdBy?.name ?? "None"}
                    job={dataVal?.createdBy?.job ?? "None"}
                    country={dataVal?.createdBy?.country ?? "None"}
                    email={dataVal?.createdBy?.email ?? "None"}
                    phoneNumber="0123456789"
                  />
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex
                w="full"
                h="full"
                borderRadius="15px"
                p="32px"
                bgColor={WHITE}
                boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
                placeItems="start"
                justifyItems="center"
                alignItems="center"
              >
                <Flex align="start" alignItems="start">
                  <Text
                    fontSize="md"
                    color={TEXT_COLOR}
                    fontWeight="bold"
                    me="10px"
                  >
                    Descriptions:{" "}
                  </Text>
                  <Text fontSize="md" color={BLACK} fontWeight="400" mb="30px">
                    {dataVal?.createdBy?.description ?? "None"}
                  </Text>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Box
          w="full"
          h="full"
          bgColor={GRAY2}
          borderRadius="15px"
          mt="24px"
          p="24px"
          boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
        >
          <Box
            w="full"
            h="60px"
            bgColor={GREEN_SHOPIFY}
            borderRadius="15px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex
              alignItems="center"
              direction="row"
              justifyContent="space-between"
              pl="24px"
              pr="10px"
            >
              <Text fontSize="lg" color="white" fontWeight="bold" my="17px">
                Gallery
              </Text>

              <Button
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={buttonEditColor}
                onClick={onOpen}
              >
                <MdEdit color={GREEN_SHOPIFY} w="20px" h="20px" />
              </Button>

              <Modal
                id="editGalleryDialog"
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                size="full"
                closeOnOverlayClick={false}
                scrollBehavior="inside"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader p="0px">
                    <Box
                      w="full"
                      h="60px"
                      bgColor={GREEN_SHOPIFY}
                      borderRadius="5px 5px 0px 0px"
                      pl="32px"
                    >
                      <Flex justifyContent="space-between" align="center">
                        <Text
                          my="12px"
                          fontSize="2xl"
                          color="white"
                          fontWeight="semibold"
                        >
                          Edit Profiles
                        </Text>
                        <ModalCloseButton mt="5px"></ModalCloseButton>
                      </Flex>
                    </Box>
                  </ModalHeader>
                  <ModalBody p="32px">
                    <Grid
                      templateColumns={{ sm: "1fr", xl: "repeat(4, 1fr)" }}
                      gap="32px"
                    >
                      {/* {dataVal &&
                        dataVal.gallery &&
                        dataVal.gallery.map((item) => (
                          <EditImage galleryItem0={galleryItem0} />
                        ))} */}
                      {dataGallery.map((item) => (
                        <EditImage
                          galleryItem={item}
                          alt=""
                          borderRadius="15px"
                        />
                      ))}
                    </Grid>
                  </ModalBody>

                  <ModalFooter p="32px" experimental_spaceX="32px">
                    <Button color={WHITE} colorScheme="green">
                      Save
                    </Button>
                    <Button color={BLACK} colorScheme="gray" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </Box>

          <Grid
            mt="24px"
            templateRows={{ sm: "1fr", xl: "repeat(3, 1fr)" }}
            templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }}
            gap="24px"
          >
            {/* {
              dataVal &&
              dataVal.gallery &&
              dataVal.gallery.map((item) => (
                <Image
                  key={item}
                  src={galleryItem0}
                  alt=""
                  borderRadius="15px"
                />
              ))} */}
            {dataGallery.map((item) => (
              <Image src={item} alt="" borderRadius="15px" />
            ))}
          </Grid>
        </Box>
      </Card>
    </Flex>
  );
}

export default Portfolio;
