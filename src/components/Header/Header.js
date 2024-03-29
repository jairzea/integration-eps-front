import {
    Avatar,
    Box,
    Button,
    Flex,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import backgroundHeader from "assets/img/ProfileBackground.png";

  import React from "react";
  
  const Header = ({
    avatarImage = false,
    name,
    email,
    tabs = [],
  }) => {
    const textColor = useColorModeValue("gray.700", "white");
    const borderProfileColor = useColorModeValue(
      "white",
      "rgba(255, 255, 255, 0.31)"
    );
    const backgroundProfile = useColorModeValue(
        "hsla(0,0%,100%,.8)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
    const emailColor = useColorModeValue("gray.400", "gray.300");
    return (
      <Box
        mb={{ sm: "205px", md: "75px", xl: "70px" }}
        borderRadius='15px'
        px='0px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        align='center'>
        <Box
          bgImage={backgroundHeader}
          w='100%'
          h='300px'
          borderRadius='25px'
          bgPosition='50%'
          bgRepeat='no-repeat'
          position='relative'
          display='flex'
          justifyContent='center'>
          <Flex
            direction={{ sm: "column", md: "row" }}
            mx='1.5rem'
            maxH='330px'
            w={{ sm: "90%", xl: "95%" }}
            justifyContent={{ sm: "center", md: "space-between" }}
            align='center'
            backdropFilter='saturate(200%) blur(50px)'
            position='absolute'
            boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
            border='2px solid'
            borderColor={borderProfileColor}
            bg={backgroundProfile}
            p='24px'
            borderRadius='20px'
            transform={{
              sm: "translateY(45%)",
              md: "translateY(110%)",
              lg: "translateY(160%)",
            }}>
            <Flex
              align='center'
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}>
                {avatarImage && (<Avatar
                me={{ md: "22px" }}
                src={avatarImage}
                w='80px'
                h='80px'
                borderRadius='15px'
                backgroundColor="transparent"
              />)}
              <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                <Text
                  fontSize={{ sm: "lg", lg: "xl" }}
                  color={textColor}
                  fontWeight='bold'
                  ms={{ sm: "8px", md: "0px" }}>
                  {name}
                </Text>
                <Text
                  fontSize={{ sm: "sm", md: "md" }}
                  color={emailColor}
                  fontWeight='semibold'>
                  {email}
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}>
                {tabs.map((info, i) => (
                    info?.child
                ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    );
  };
  
  export default Header;
  