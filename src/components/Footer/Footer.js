import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          {"Hecho con ❤️ por "}
        </Text>
        <Link
          color="teal.400"
          href="https://www.protech.net.co"
          target="_blank"
        >
          {"Jair Zea "}
        </Link>
        &
        <Link
          color="teal.400"
          href="https://www.protech.net.co"
          target="_blank"
        >
          {" Protech"}
        </Link>
        {" para una mejor web"}
      </Text>
    </Flex>
  );
}
