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
import Card from "components/Card/Card";
import { useDisclosure } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";
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
import ProjectCard from "components/Dashboard/ProjectCard";
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

import { useHistory } from "react-router-dom";
import { USER_PROJECT } from "utils/path/internalPaths";

function Project() {
  const [project, setProject] = useState([]);
  const [projectName, setProjectName] = useState();
  const nameHandleChange = (event) => setProjectName(event.target.value);

  const [emptyProject, setEmptyProject] = useState(true);
  const { state, update } = useContext(AuthenticationContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const getProjectList = () =>
    axios
      .get(USER_PROJECT, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        setProject(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  useEffect(() => {
    (async () => {
      history.push({ pathname: "/admin/project" });
      getProjectList();
    })();
  }, []);
  const toast = createStandaloneToast();
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!!projectName) {
      console.log(projectName);
      const headers = {
        Authorization: `Bearer ${window.localStorage.getItem("bearerToken")}`,
        "Content-Type": "application/json;charset=UTF-8",
      };
      axios
        .post(
          USER_PROJECT,
          {
            projectName: projectName,
          },
          { headers: headers }
        )
        .then((res) => {
          if (res.status === 200) {
            getProjectList();
            toast({
              title: "Success",
              description: "Project created!",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            onClose();
          } else {
            toast({
              title: "Failed",
              description: "Error",
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
  };
  return (
    <Flex pt={{ base: "120px", md: "75px" }} direction="column">
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
                onChange={nameHandleChange}
                placeholder="Project name*"
                required
                h="50px"
                color={BLACK}
                fontSize="lg"
                borderColor={BLACK}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter p="32px" experimental_spaceX="32px">
            <Button
              color={WHITE}
              colorScheme="green"
              onClick={(e) => onHandleSubmit(e)}
            >
              Create
            </Button>
            <Button color={BLACK} colorScheme="gray" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
            pl="32px"
            pr="10px"
          >
            <Text fontSize="lg" color="white" fontWeight="bold" my="17px">
              Your Projects
            </Text>
          </Flex>
        </Box>

        <Grid
          mt="24px"
          templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }}
          gap="24px"
        >
          <Card
            title="Create New Project"
            width="full"
            height="full"
            minHeight="200px"
            shadow="lg"
            bg="white"
            p={4}
            mb={4}
            borderRadius="lg"
            cursor="pointer"
            _hover={{ shadow: "2xl", bg: "gray.50" }}
            onClick={onOpen}
          >
            <AddIcon
              w="50px"
              h="50px"
              style={{
                margin: "auto",
                display: "block",
              }}
            />
          </Card>
          {!!project &&
            project?.map((item) => (
              <div
                title={item.projectName}
                onClick={() => {
                  console.log(item);
                  window.localStorage.setItem("projectId", item.id);
                  history.push({
                    pathname: "/admin/viewProject",
                  });
                }}
              >
                <ProjectCard data={item} />
              </div>
            ))}
        </Grid>
      </Card>
    </Flex>
  );
}

export default Project;

//const params = new URLSearchParams(window.location.search);
//params.get('abc');
