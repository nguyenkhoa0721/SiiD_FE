// Chakra imports
import {
  Flex,
  Box,
  Text,
  HStack,
  Button,
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
  List,
  ListItem,
  toast,
  createStandaloneToast,
  Switch,
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
import CommentCard from "components/Project/CommentCard";
import { useEffect, useContext } from "react";
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
import { MdOutlineCloudUpload } from "react-icons/md";
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";
import { USER_PROJECT } from "utils/path/internalPaths";
import { GET_HISTORY } from "utils/path/internalPaths";
import TimelineRow from "components/Tables/TimelineRow";
import { GET_COMMENT } from "utils/path/internalPaths";
import ShowImage from "components/Project/ShowImage";

const InputComment = ({ func1, func2 }) => (
  <HStack>
    <Input
      placeholder="Send message herer"
      bg={GRAY2}
      color={BLACK}
      variant="ghost"
      onChange={(e) => {
        func1(e.target.value);
      }}
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
        <Button variant="link" onClick={func2}>
          <ArrowForwardIcon />
        </Button>
      </ButtonGroup>
    </Box>
  </HStack>
);

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

function ViewProject() {
  const toast = createStandaloneToast();

  // upload
  const [file, setFiles] = useState([]);
  const [new_des, setNewDes] = useState("");
  // version
  const [versionHistory, setVersionHistory] = useState([]); //list
  const [version, setVersion] = useState(); // item
  const [chosenVersion, setChosenVersion] = useState(); // chosenVersion
  // comment
  const [cmt, setCmt] = useState([]);
  const [new_cmt, setNewCmt] = useState();
  const createNewCmt = () => {
    console.log(new_cmt);
  };
  const { state, update } = useContext(AuthenticationContext);
  const {
    isOpen: isUploadModalOpen,
    onOpen: onOpenUploadModal,
    onClose: onCloseUploadModal,
  } = useDisclosure();
  const {
    isOpen: isSettingModalOpen,
    onOpen: onOpenSettingModal,
    onClose: onCloseSettingModal,
  } = useDisclosure();
  const history = useHistory();
  const getLink = () => {
    axios
      .get(USER_PROJECT + window.localStorage.getItem('projectId')+"/invite", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          toast({
            title: "Success",
            description: res.data,
            status: "success",
            duration: 5000,
            isClosable: true,
          });          
        } else {
          toast({
            title: "Failed",
            description: "Get failed",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }) 
      .catch((error)=>{
        console.error(error);
        toast({
          title: "Failed",
          description: "Error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
      onCloseSettingModal();
    };
      
  
  const deleteProject = () => {
    console.log(window.localStorage.getItem('projectId'));
    axios
      .delete(USER_PROJECT + window.localStorage.getItem('projectId'), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          onCloseSettingModal();
          toast({
            title: "Success",
            description: "Delete success",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Failed",
            description: "Delete failed",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };
  const getProject = () => {
    axios
      .get(USER_PROJECT + window.localStorage.getItem('projectId'), {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((response) => {
        setVersionHistory(response.data.data.histories);
        if (version === null || version === undefined) {
          getDetailVersion(response.data.data.histories[0].id);
          // getComment(response.data.data.histories[0].id);
          getComment("618eb8c02b4ca532f6af12e5");
          setChosenVersion(response.data.data.histories[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getDetailVersion = (versionID) => {
    axios
      .get(GET_HISTORY + versionID, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((response) => {
        setVersion(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getComment = (versionID) => {
    axios
      .get(GET_COMMENT + versionID, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        },
      })
      .then((response) => {
        setCmt(response.data.data);
        console.log("GGG");
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
          .post(USER_PROJECT + window.localStorage.getItem('projectId'), form, { headers: headers })
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
            toast({
              title: "Failed",
              description: err.toString(),
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

  useEffect(() => {
    (async () => {
      if (chosenVersion && chosenVersion.id) {
        //await getComment(chosenVersion.id);
        await getComment("618eb8c02b4ca532f6af12e5");
      }
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
              {version && version.changeNote
                ? version.changeNote
                : "Loading..."}
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
                <Button variant="ghost" onClick={onOpenSettingModal}>
                  <SettingsIcon />
                </Button>
                <Modal
                  id="SettingDialog"
                  isCentered
                  isOpen={isSettingModalOpen}
                  onClose={onCloseSettingModal}
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
                            Settings
                          </Text>
                          <ModalCloseButton mt="5px"></ModalCloseButton>
                        </Flex>
                      </Box>
                    </ModalHeader>
                    <ModalBody px="32px" pt="32px">
                      <Flex direction="column">
                        <Flex align="center" mb="20px">
                          <Button
                            colorScheme="green"
                            me="10px"
                            color={PINK}
                            onClick={() => {
                              deleteProject();
                            }}
                          />
                          <Text
                            noOfLines={1}
                            fontSize="md"
                            color={BLACK}
                            fontWeight="400"
                          >
                            Delete project
                          </Text>
                        </Flex>
                        <Flex align="center" mb="20px">
                        <Button
                            colorScheme="green"
                            me="10px"
                            color={PINK}
                            onClick={() => {
                              getLink();
                            }}
                          />
                          <Text
                            noOfLines={1}
                            fontSize="md"
                            color={BLACK}
                            fontWeight="400"
                          >
                            Turn on sharing
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
                            Archive project
                          </Text>
                        </Flex>
                      </Flex>
                    </ModalBody>

                    <ModalFooter p="32px" experimental_spaceX="32px">
                      <Button color={WHITE} colorScheme="green">
                        Save
                      </Button>
                      <Button
                        color={BLACK}
                        colorScheme="gray"
                        onClick={onCloseSettingModal}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </ButtonGroup>
            <Box pt={4} pr={4} borderRadius="lg">
              {<ShowImage chosenVersion={version} />}
              <Box align="end">
                <Stack direction="row" spacing={4} align="center">
                  <Button variant="ghost" onClick={() => {}}>
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
            <CommentCard
              path="https://bit.ly/dan-abramov"
              des="It's beautiful but in my point of view, I think the size must be to square because of the frame when I print."
              date="25/1/2022"
            />
            <CommentCard
              path="http://localhost:3000/static/media/avatar.c9889310.png"
              des="Yeah! I'll fix it in ther next release. Anything elsu to fixed ?"
              date="25/1/2022"
            />
            <CommentCard
              path="https://bit.ly/dan-abramov"
              des="Nope. I'm pretty satify with the remain. Waiting for the next version."
              date="26/1/2022"
            />
            {/* {cmt &&
                cmt.length !== 0 &&
                cmt.map((item, index) => {
                  <CommentCard
                    key={index}
                    des={item.content ? item.content : "Loading..."}
                  />;
                })} */}
            <InputComment
              onChange={(e) => {
                setNewCmt(e);
              }}
              onClick={() => {
                console.log(new_cmt);
              }}
            />
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
        {versionHistory &&
          chosenVersion &&
          versionHistory.map((e, index) => (
            <div
              key={index}
              onClick={async () => {
                await getDetailVersion(versionHistory[index].id);
                // await getComment(versionHistory[index].id);
                setChosenVersion(versionHistory[index]);
              }}
            >
              <TimelineRow
                title={e.changeNote}
                date={e.createdAt}
                color={e.id === chosenVersion.id ? GREEN_SHOPIFY : BLACK}
                index={index}
                arrLength={versionHistory.length}
              />
            </div>
          ))}
      </Flex>
    </Flex>
  );
}

export default ViewProject;

//const params = new URLSearchParams(window.location.search);
//params.get('abc');
