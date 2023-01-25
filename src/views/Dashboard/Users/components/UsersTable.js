// Chakra imports
import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  Td,
  Text,
  Badge,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import { Table } from "react-chakra-pagination";
import { RiFileUserFill } from "react-icons/ri";
import avatarGamer from "../../../../assets/img/avatars/gamer.png";

const UsersTable = ({hanledDataUser, title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [page, setPage] = React.useState(1);


  const bgStates = useColorModeValue("gray.400", "#1a202c");
  const colorStates = useColorModeValue("white", "gray.400");

  const tableData = data.map(({ id, logo, name, email, state, }) => ({
    user: (<Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={avatarGamer} w="50px" borderRadius="12px" me="18px" />
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
      </Td>),
      status: (<Td>
        <Badge
          bg={state === 1 ? "green.400" : bgStates}
          color={state === 1 ? "white" : colorStates}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {state ? 'Activo' : 'Inactivo'}
        </Badge>
      </Td>),
      actions: (<Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={ () => hanledDataUser({ id, avatarGamer, name, email, state, }) }>
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            <EditIcon boxSize={7} />
          </Text>
        </Button>
      </Td>)
  }));
  
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody>
      <Table
        colorScheme="blue"
        // Fallback component when list is empty
        emptyData={{
          icon: RiFileUserFill,
          text: "Nobody is registered here."
        }}
        totalRegisters={data.length}
        page={page}
        // Listen change page event and control the current page using state
        onPageChange={(page) => setPage(page)}
        columns={captions}
        data={tableData}
      />
      </CardBody>
    </Card>
  );
};

export default UsersTable;
