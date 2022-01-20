import React from "react";
import { useState, useEffect, useContext } from "react";
import { USER_PROFILE } from "utils/path/internalPaths";
import axios from "axios";
import { AuthenticationContext } from "store/AuthenticationContext";
import { createStandaloneToast } from "@chakra-ui/react";

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
import { FormControl, Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  Switch,
  Text,
} from "@chakra-ui/react";
import {
  GREEN_SHOPIFY,
  TEXT_COLOR,
  GRAY2,
  BLACK,
  WHITE,
  PINK,
} from "utils/const/ColorChoice";
import Card from "components/Card/Card";

import avatar from "assets/img/avatars/avatar.png";
import ProfileBgImage from "assets/img/ProfileBackground3.png";
import { MdEdit } from "react-icons/md";

function Profile() {
  const [profileName, setProfileName] = useState();
  const nameHandleChange = (event) => setProfileName(event.target.profileName);
  const [profileJob, setProfileJob] = useState();
  const jobHandleChange = (event) => setProfileJob(event.target.profileName);
  const [profileCountry, setProfileCountry] = useState();
  const countryHandleChange = (event) =>
    setProfileCountry(event.target.profileName);
  const [profileEmail, setProfileEmail] = useState();
  const emailHandleChange = (event) =>
    setProfileEmail(event.target.profileName);
  const [profilePhone, setProfilePhone] = useState();
  const phoneHandleChange = (event) =>
    setProfilePhone(event.target.profileName);
  const [profileDescription, setProfileDescription] = useState();
  const descriptionHandleChange = (event) =>
    setProfileDescription(event.target.profileName);

  const [profileList, setProfileList] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    (async () => {
      await axios
        .get(USER_PROFILE)
        .then((response) => {
          console.log(response);
          setProfileName(response.data.data.name);
          setProfileJob(response.data.data.job);
          setProfileCountry(response.data.data.country);
          setProfileEmail(response.data.data.email);
          setProfilePhone(response.data.data.phone);
          setProfileDescription(response.data.data.description);

          setProfileList([
            ["Full Name: ", profileName],
            ["Current job: ", profileJob],
            ["Country: ", profileCountry],
            ["Email: ", profileEmail],
            ["Phone number: ", profilePhone],
            ["Descriptions: ", profileDescription],
          ]);
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  const toast = createStandaloneToast();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      axios
        .post(USER_PROFILE, {
          name: profileName,
          job: profileJob,
          country: profileCountry,
          email: profileEmail,
          phone: profilePhone,
          description: profileDescription,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: "Success",
              description: "Profile saved!",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Failed",
              description: "Wrong username or password",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          toast({
            title: "Failed",
            description: "Noooo",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };
  return (
    <Flex direction="column">
      <Modal
        id="editProfileDialog"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
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
                  color={TEXT_COLOR}
                  fontWeight="semibold"
                >
                  Edit Profiles
                </Text>
                <ModalCloseButton mt="5px"></ModalCloseButton>
              </Flex>
            </Box>
          </ModalHeader>
          <ModalBody px="32px" pt="32px">
            <FormControl
              experimental_spaceY="32px"
              onSubmit={(e) => onHandleSubmit(e)}
            >
              <Input
                id="name"
                type="name"
                value={profileName}
                onChange={nameHandleChange}
                placeholder="Full name*"
                required
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
              <Input
                id="job"
                type="job"
                value={profileJob}
                onChange={jobHandleChange}
                placeholder="Current job*"
                required
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
              <Input
                id="country"
                type="country"
                value={profileCountry}
                onChange={countryHandleChange}
                placeholder="Country*"
                required
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
              <Input
                id="email"
                type="email"
                value={profileEmail}
                onChange={emailHandleChange}
                placeholder="Email*"
                required
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
              <Input
                id="phone-number"
                type="number"
                value={profilePhone}
                onChange={phoneHandleChange}
                placeholder="Phone number"
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
              <Textarea
                id="description"
                type=""
                value={profileDescription}
                onChange={descriptionHandleChange}
                placeholder="Description"
                h="200px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              ></Textarea>
            </FormControl>
          </ModalBody>

          <ModalFooter p="32px" experimental_spaceX="32px">
            <Button
              color={WHITE}
              colorScheme="green"
              onClick={(e) => onHandleSubmit(e)}
            >
              Save
            </Button>
            <Button color={BLACK} colorScheme="gray" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
              borderColor="white"
            >
              <Button
                position="absolute"
                right="5px"
                bottom="5px"
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={WHITE}
              >
                <MdEdit color={GREEN_SHOPIFY} w="20px" h="20px" />
              </Button>
            </Avatar>
            <Flex direction="column" maxWidth="100%" color={WHITE}>
              <Text fontSize={{ sm: "sm", md: "md" }} fontWeight="semibold">
                {profileJob}
              </Text>
              <Text
                fontSize={{ sm: "xl", md: "2xl", lg: "4xl" }}
                fontWeight="bold"
              >
                {profileName}
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
            bgColor={GREEN_SHOPIFY}
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
              <Text
                fontSize="lg"
                color={TEXT_COLOR}
                fontWeight="bold"
                my="17px"
              >
                Your Profiles
              </Text>
              <Button
                w="40px"
                h="40px"
                p="0px"
                borderRadius="full"
                bgColor={WHITE}
                onClick={onOpen}
              >
                <MdEdit color={GREEN_SHOPIFY} w="20px" h="20px" />
              </Button>
            </Flex>
          </Box>
          <Box
            w="full"
            h="full"
            bgColor={GRAY2}
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
              {!!profileList?.length &&
                profileList.map((item) => (
                  <Flex align="center" mb="18px" alignItems="start">
                    <Text
                      fontSize="md"
                      color={TEXT_COLOR}
                      fontWeight="bold"
                      me="10px"
                    >
                      {item[0]}
                    </Text>
                    <Text fontSize="md" color={BLACK} fontWeight="400">
                      {item[1]}
                    </Text>
                  </Flex>
                ))}
            </Flex>
          </Box>
        </Card>
        <Card p="32px" boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)">
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
              pl="32px"
              pr="10px"
            >
              <Text
                fontSize="lg"
                color={TEXT_COLOR}
                fontWeight="bold"
                my="17px"
              >
                Platform Settings
              </Text>
            </Flex>
          </Box>
          <Box
            w="full"
            h="full"
            bgColor={GRAY2}
            borderRadius="15px"
            mt="32px"
            p="32px"
            boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
          >
            <Flex direction="column">
              <Text fontSize="sm" color={BLACK} fontWeight="600" mb="20px">
                ACCOUNT
              </Text>
              <Flex align="center" mb="20px">
                <Switch colorScheme="green" me="10px" color={PINK} />
                <Text
                  noOfLines={1}
                  fontSize="md"
                  color={BLACK}
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
                  color={BLACK}
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
                  color={BLACK}
                  fontWeight="400"
                >
                  Email me when someone mentions me
                </Text>
              </Flex>
              <Text
                fontSize="sm"
                color={BLACK}
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
                  color={BLACK}
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
                  color={BLACK}
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
                  color={BLACK}
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
