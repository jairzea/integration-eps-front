import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function TablesTableRow({ dataUser, ...props}) {
  const { id, logo, name, email, state, } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStates = useColorModeValue("gray.400", "#1a202c");
  const colorStates = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={logo} w="50px" borderRadius="12px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Badge
          bg={state === 1 ? "green.400" : bgStates}
          color={state === 1 ? "white" : colorStates}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {state ? 'Activo' : 'Inactivo'}
        </Badge>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={ () => dataUser({ id, logo, name, email, state, }) }>
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            <EditIcon boxSize={7} />
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
