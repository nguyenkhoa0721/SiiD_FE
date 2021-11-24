import { React, useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.jpg";
//Import Axios
import axios from "axios";
import {Link, useHistory} from 'react-router-dom';
function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const router = useHistory();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      console.log("SignIn");
      axios
        .post("https://nmcnpm-siid.herokuapp.com/api/v1/user/login",
          {
            email: email,
            password: password,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            router.push('/admin/dashboard');
            toast({
              title: "Success",
              description: "You have been signed in",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          } else{
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
            description: err.toString(),
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    }
  };

  return (
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
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            
            <form onSubmit={(e) =>onHandleSubmit(e)}>
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
                  fontSize="10px"
                  type="submit"
                  bg="teal.300"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: "teal.200",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}
                >
                  SIGN IN
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
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link to="/auth/signup">
                  <Text color={titleColor} as="span" ms="5px" fontWeight="bold">
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
  );
}

export default SignIn;
