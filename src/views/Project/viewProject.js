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
  ButtonGroup,
  Stack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Textarea,
  FormControl,
  FormLabel,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AtSignIcon,
  DragHandleIcon,
  HamburgerIcon,
  SettingsIcon,
  AddIcon,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import { tablesTableData } from "variables/general";
import CommentCard from "components/Project/CommentCard";
import HistoryItemCard from "components/Project/HistoryItemCard";
import { useEffect, useContext } from "react";
import { USER_PROFILE } from "utils/path/internalPaths";
import axios from "axios";
import { AuthenticationContext } from "store/AuthenticationContext";
import {
  GREEN_SHOPIFY,
  GREEN_DARKER,
  TEXT_COLOR,
  GRAY1,
  GRAY2,
  BLACK,
  WHITE,
  PINK,
} from "utils/const/ColorChoice";

const InputComment = () => (
  <HStack>
    <Input
      placeholder="Send message herer"
      color={GREEN_SHOPIFY}
      variant="ghost"
    />
    <Box align="end">
      <ButtonGroup>
        <Button
          variant="link"
          onClick={() => {
            console.log("Pay");
          }}
        >
          <AtSignIcon />
          Pay
        </Button>
        <Button variant="link">
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </Box>
  </HStack>
);
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";

function File({ file, setFiles }) {
  const handleDrop = (acceptedFiles) =>
    setFiles(acceptedFiles.map((file) => file));
  const dropStyle = {
    textAlign: "center",
    padding: "20px",
    border: "3px dashed #eeeeee",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    marginBottom: "20px",
  };
  return (
    <Box style={dropStyle}>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Selected files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <List>
          {file.map((f) => (
            <ListItem key={f.name}>{f.name}</ListItem>
          ))}
        </List>
      </div>
    </Box>
  );
}

function uploadVersion(name, desc, file) {
  console.log(name, desc, file);
}

function ViewProject() {
  const [file, setFiles] = useState([]);
  const [new_name, setNewName] = useState("");
  const [new_des, setNewDes] = useState("");

  const [emptyProject, setEmptyProject] = useState(true);
  const { state, update } = useContext(AuthenticationContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      history.push({ pathname: "/admin/viewProject" });
      //const params = new URLSearchParams(window.location.search);
      //params.get('abc');
      const profile = await axios
        .get(USER_PROFILE, {
          headers: {
            Authorization: `Bearer ${state.bearerToken}`,
          },
        })
        .catch((error) => {
          console.error(error);
        });
    })();
  }, []);

  return (
    <Flex
      overflow="auto"
      flexDirection="row"
      pt={{ base: "120px", md: "75px" }}
    >
      <Flex overflow="auto" flexDirection="column" width="66%" mr="8">
        <Box
          bg="white"
          w="100%"
          color="black"
          borderRadius="lg"
          pl="4"
          pr="4"
          mb="8"
        >
          <Box
            bg={GREEN_SHOPIFY}
            w="100%"
            pl={6}
            pr={4}
            color="white"
            borderRadius="lg"
          >
            <Text fontWeight="bold" fontSize="xl">
              Version 3.0: Change color pallete hello
            </Text>
          </Box>
          <Box align="end">
            <ButtonGroup>
              <Stack direction="row" spacing={4} align="center">
                <Button
                  variant="ghost"
                  onClick={() => {
                    history.push({ pathname: "/admin/project/details" });
                  }}
                >
                  <DragHandleIcon />
                </Button>
                <Button variant="ghost">
                  <HamburgerIcon />
                </Button>
                <Button variant="ghost">
                  <SettingsIcon />
                </Button>
              </Stack>
            </ButtonGroup>
            <Box pt={4} pr={4} borderRadius="lg">
              <Image
                borderRadius="lg"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Box align="end">
                <Stack direction="row" spacing={4} align="center">
                  <Button variant="ghost">
                    <ArrowLeftIcon />
                  </Button>
                  <Text>1</Text>
                  <Button variant="ghost">
                    <ArrowRightIcon />
                  </Button>
                  <Button variant="ghost" onClick={onOpen}>
                    <AddIcon />
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
                          <FormControl experimental_spaceY="32px">
                            <Input
                              id="name"
                              type="name"
                              placeholder="Name version*"
                              required
                              h="50px"
                              color={BLACK}
                              fontSize="lg"
                              borderColor={BLACK}
                              onChange={(e) => setNewName(e.target.value)}
                            />
                            <Textarea
                              id="description"
                              type=""
                              placeholder="Description"
                              h="200px"
                              color={BLACK}
                              fontSize="lg"
                              borderColor={BLACK}
                              onChange={(e) => setNewDes(e.target.value)}
                            ></Textarea>
                            <File file={file} setFiles={setFiles} />
                          </FormControl>
                        </ModalBody>

                        <ModalFooter p="32px" experimental_spaceX="32px">
                          <Button
                            color={WHITE}
                            colorScheme="green"
                            onClick={uploadVersion(new_name, new_des, file)}
                          >
                            Save
                          </Button>
                          <Button
                            color={BLACK}
                            colorScheme="gray"
                            onClick={onClose}
                          >
                            Cancel
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box bg="white" w="100%" p={4} color="black" borderRadius="lg">
          <Box
            bg={GREEN_SHOPIFY}
            w="100%"
            pl={6}
            pr={4}
            color="white"
            borderRadius="lg"
          >
            <Text fontWeight="bold" fontSize="xl">
              Review
            </Text>
          </Box>
          <Flex direction="column">
            <Flex>
              <CommentCard />
            </Flex>
            <InputComment />
          </Flex>
        </Box>
      </Flex>
      <Flex width={1 / 3} flexDirection="column" bg="white">
        <Flex
          bg={GREEN_SHOPIFY}
          w="100%"
          pl={6}
          pr={4}
          color="white"
          borderRadius="lg"
        >
          <HStack spacing={2}>
            <Button variant="link">
              <ArrowRightIcon w={4} h={4} color="white" />
            </Button>
            <Text fontWeight="bold" fontSize="xl">
              History
            </Text>
          </HStack>
        </Flex>
        <HistoryItemCard />
        <HistoryItemCard />
      </Flex>
    </Flex>
  );
}

export default ViewProject;

//const params = new URLSearchParams(window.location.search);
//params.get('abc');
