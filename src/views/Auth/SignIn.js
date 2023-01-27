import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import { login } from "../../services/apis/user/userServices"
import { useHistory } from "react-router-dom";

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");

  const history = useHistory()
  const toast = useToast()

  const userLogin = () => {
    const email = document.getElementById('email-user-login-protech').value
    const password = document.getElementById('password-user-login-protech').value
    login({email, password})
      .then(resp => {
        localStorage.setItem('access_token', resp?.token)
          toast({
            title: resp?.message,
            position: 'top-right',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          return history.push("/admin/dashboard")
        }
      )
      .catch(err => 
        toast({
          title: 'Ocurrio un error',
          description: err?.response?.data?.message,
          position: 'top-right',
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      )
  }
  
  return (
    <Flex position='relative' mb='40px'>
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Bienvenido de nuevo
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Ingrese su email and contraseña para iniciar sesión
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Email
              </FormLabel>
              <Input
                id="email-user-login-protech"
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Contraseña
              </FormLabel>
              <Input
                id="password-user-login-protech"
                borderRadius='15px'
                mb='36px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
              />
              {/* <FormControl display='flex' alignItems='center'>
                <Switch id='remember-login' colorScheme='teal' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Recúerdame
                </FormLabel>
              </FormControl> */}
              <Button
                onClick={userLogin}
                fontSize='10px'
                type='submit'
                bg='teal.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                _hover={{
                  bg: "teal.200",
                }}
                _active={{
                  bg: "teal.400",
                }}>
                INICIAR SESIÓN
              </Button>
            </FormControl>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          style={{ borderWidth: '2px', backgroundColor: '#75b99947' }}
          borderBottomLeftRadius='20px'
          right='-1px'>
          <Box
            bgImage={signInImage}
            w='99%'
            h='99%'
            bgSize='containt'
            bgPosition='50%'
            position='absolute'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
