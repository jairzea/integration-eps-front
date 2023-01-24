import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  FormHelperText,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { EditIcon } from "@chakra-ui/icons";
import { BsTrash } from "react-icons/bs";

function DashboardTableRow({editDocument, deleteDocument, ...props}) {
  const { data, path, logo, name, status, internal_filing_number, applicant_name, applicant_identification, modalitie, procedure } = props;

  console.log('data', data)
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <a href={`${process.env.REACT_APP_BACKEND_DOMAIN}/${path}`} target="_blank">
          <Avatar src={logo} backgroundColor='transparent' borderRadius="1px" h={"24px"} w={"24px"} me="18px"/>
          </a>
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {internal_filing_number}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {status}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{applicant_name}</Text>
          <Text size="xs">{applicant_identification}</Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {modalitie}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {procedure}
        </Text>
      </Td>
      <Td>
      <Menu w={10}>
        <MenuButton as={Button} w={12} backgroundColor="transparent">
          <FaEllipsisV />
        </MenuButton>
        <MenuList w={10}>
          <MenuItem onClick={() => editDocument(data)} icon={<EditIcon color={'teal.300'}/>}> Editar</MenuItem>
          <MenuItem onClick={() => deleteDocument(data)} icon={<BsTrash color="red" />}> Eliminar</MenuItem>
        </MenuList>
      </Menu>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
