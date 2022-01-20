import { React, useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.jpg";
//Import Axios
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import theme from "theme/theme";
import { ChakraProvider } from "@chakra-ui/provider";
import { USER_LOGIN } from "utils/path/internalPaths";
import { GREEN_SHOPIFY } from "utils/const/ColorChoice";
import { TEXT_COLOR } from "utils/const/ColorChoice";
import { GREEN_DARKER } from "utils/const/ColorChoice";
import { createStandaloneToast } from '@chakra-ui/react';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const toast = createStandaloneToast();
  const router = useHistory();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      axios
        .post(USER_LOGIN, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            router.push("/admin/dashboard");
            toast({
              title: "Success",
              description: "You have been signed in",
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
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <Flex position="relative" mb="40px">
        <Flex
          h={{ sm: "initial", md: "75vh", lg: "85vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="30px"
          pt={{ sm: "100px", md: "0px" }}
        >
          <Flex
            alignItems="center"
            justifyContent="start"
            style={{ userSelect: "none" }}
            w={{ base: "100%", md: "50%", lg: "42%" }}
          >
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p="48px"
              mt={{ md: "150px", lg: "80px" }}
            >
              <Heading color={GREEN_SHOPIFY} fontSize="32px" mb="10px">
                Welcome Back
              </Heading>
              <Text
                mb="36px"
                ms="4px"
                color={TEXT_COLOR}
                fontWeight="bold"
                fontSize="14px"
              >
                Enter your email and password to sign in
              </Text>

              <form onSubmit={(e) => onHandleSubmit(e)}>
                <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Email
                  </FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    borderRadius="15px"
                    mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Your email address"
                    size="lg"
                  />
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Password
                  </FormLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    borderRadius="15px"
                    mb="36px"
                    fontSize="sm"
                    type="password"
                    placeholder="Your password"
                    size="lg"
                  />

                  <Button
                    fontSize="15px"
                    type="submit"
                    bg={GREEN_SHOPIFY}
                    w="100%"
                    h="45"
                    mb="20px"
                    color="white"
                    mt="20px"
                    _hover={{
                      bg: GREEN_DARKER,
                    }}
                    _active={{
                      bg: GREEN_SHOPIFY,
                    }}
                  >
                    Sign in
                  </Button>
                </FormControl>
              </form>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={TEXT_COLOR} fontWeight="medium">
                  Don't have an account?
                  <Link to="/auth/signup">
                    <Text
                      color={GREEN_SHOPIFY}
                      as="span"
                      ms="5px"
                      fontWeight="bold"
                    >
                      Sign Up
                    </Text>
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            display={{ base: "none", md: "block" }}
            overflowX="hidden"
            h="100%"
            w="40vw"
            position="absolute"
            right="0px"
          >
            <Box
              bgImage={signInImage}
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderBottomLeftRadius="20px"
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default SignIn;
