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
  toast,
  createStandaloneToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  CheckCircleIcon,
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
import { MdEdit, MdOutlineCloudUpload } from "react-icons/md";
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
import { BASE_URL } from "utils/path/internalPaths";
import { USER_PROJECT } from "utils/path/internalPaths";
import { GET_HISTORY } from "utils/path/internalPaths";
import { error, get } from "@chakra-ui/utils";
import { getNodeMajorVersion } from "typescript";
import TimelineRow from "components/Tables/TimelineRow";
import { GET_COMMENT } from "utils/path/internalPaths";
function File({ file, setFiles }) {
  const handleDrop = (acceptedFiles) =>
    setFiles(acceptedFiles.map((file) => file));
  const dropStyle = {
    textAlign: "center",
    padding: "20px",
    border: "3px dashed #eeeeee",
    backgroundColor: "#fafafa",
    color: GREEN_SHOPIFY,
    marginBottom: "20px",
  };
  return (
    <Box style={dropStyle}>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <MdOutlineCloudUpload
              size="150px"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
            <p>UPLOAD IMAGE</p>
            <hr
              style={{
                width: "70%",
                border: "1px solid #718096",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            ></hr>
            <p>CHOOSE FILE FROM LOCAL</p>
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

function ViewProject(projID) {
  const toast = createStandaloneToast();

  projID = "61ee658b4b0c2e483e0c29d4";
  // upload
  const [file, setFiles] = useState([]);
  const [cmt, setCmt] = useState([]);
  const [new_des, setNewDes] = useState("");
  // version
  const [versionHistory, setVersionHistory] = useState([]); //list
  const [version, setVersion] = useState(); // item

  const { state, update } = useContext(AuthenticationContext);
  const {
    isOpen: isUploadModalOpen,
    onOpen: onOpenUploadModal,
    onClose: onCloseUploadModal,
  } = useDisclosure();
  const history = useHistory();
  const getProject = () => {
    axios
      .get(USER_PROJECT + projID, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.histories);
        setVersionHistory(response.data.data.histories);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const getVersionHistory = (versionID) => {
  //   axios
  //     .get(GET_HISTORY + versionID, {
  //       headers: {
  //         Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
  //       },
  //     })
  //     .then((response) => {
  //       console.log("F");
  //       setVersion(response.data.data);
  //       console.log(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const getComment = (versionID) => {
    axios
      .get(GET_COMMENT + versionID, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((response) => {
        setCmt(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    (async () => {
      history.push({ pathname: "/admin/viewProject" });
      //const params = new URLSearchParams(window.location.search);
      //params.get('abc');
      await getProject();
      console.log("Hehe");
      console.log(versionHistory[0]);
      if (version === null) {
        setVersion(versionHistory[0]);
      }
    })();
  }, []);
  const onHandleUploadSubmit = (e) => {
    console.log(new_des, file);
    if (file.length > 0) {
      e.preventDefault();

      const form = new FormData();
      for (let i = 0; i < file.length; i++) {
        form.append("files[]", file[i]);
      }
      form.append("changeNote", new_des);

      if (true) {
        const headers = {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        };
        axios
          .post(USER_PROJECT + projID, form, { headers: headers })
          .then((res) => {
            if (res.status === 200) {
              onCloseUploadModal();
              toast({
                title: "Success",
                description: "Upload success!",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            } else {
              toast({
                title: "Failed",
                description: "Change file name to new name",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          })
          .catch((err) => {
            console.log("Checkpoint");
            toast({
              title: "Failed",
              description: err,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          });
      }
    } else {
      toast({
        title: "Failed",
        description: "Choose at least a file to upload",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
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
                  <Button variant="ghost" onClick={onOpenUploadModal}>
                    <AddIcon />
                    <Modal
                      id="editProfileDialog"
                      isCentered
                      isOpen={isUploadModalOpen}
                      onClose={onCloseUploadModal}
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
                                Upload new version
                              </Text>
                              <ModalCloseButton mt="5px"></ModalCloseButton>
                            </Flex>
                          </Box>
                        </ModalHeader>
                        <ModalBody px="32px" pt="32px">
                          <FormControl experimental_spaceY="32px">
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
                            onClick={(e) => {
                              onHandleUploadSubmit(e);
                            }}
                          >
                            Save
                          </Button>
                          <Button
                            color={BLACK}
                            colorScheme="gray"
                            onClick={onCloseUploadModal}
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
              <CommentCard date={121514} />
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
        <TimelineRow
          title={"He he"}
          date={"He he"}
          color={GREEN_SHOPIFY}
          index={0}
          arrLength={3}
        />
        <TimelineRow
          title={"He he"}
          date={"He he"}
          color={GREEN_SHOPIFY}
          index={1}
          arrLength={3}
        />
        <TimelineRow
          title={"He he"}
          date={"He he"}
          color={GREEN_SHOPIFY}
          index={2}
          arrLength={3}
        />
      </Flex>
    </Flex>
  );
}

export default ViewProject;

//const params = new URLSearchParams(window.location.search);
//params.get('abc');
