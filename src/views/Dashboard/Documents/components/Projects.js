// Chakra imports
import {
  Flex,
  Avatar,
  Text,
  Td,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from "@chakra-ui/react";
import { Table } from "react-chakra-pagination";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import pdf from "../../../../assets/img/pdf.png";
import React from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { FaEllipsisV } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { EditIcon } from "@chakra-ui/icons";

const Projects = ({editDocument, title, captions, data = [] }) => {
  const [page, setPage] = React.useState(1);
  const deleteDocument = (row) => alert(row)
  const textColor = useColorModeValue("gray.700", "white");

  const tableData = data?.map((row) => ({
    type: (<Td minWidth={{ sm: "250px" }} pl="0px">
            <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <a href={row.file_path} target="_blank">
                <Avatar src={pdf} backgroundColor='transparent' borderRadius="1px" h={"24px"} w={"24px"} me="18px"/>
              </a>
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {row?.type?.name}
              </Text>
            </Flex>
          </Td>),
    number_filing: (<Td>
                      <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                        {row?.internal_filing_number}
                      </Text>
                    </Td>),
    state: (<Td>
              <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
                {row?.state}
              </Text>
            </Td>),
    applicant: (<Td>
                  <Flex direction="column">
                    <Text
                      fontSize="md"
                      color="teal.300"
                      fontWeight="bold"
                      pb=".2rem"
                    >{row?.applicant_name}</Text>
                    <Text size="xs">{row?.applicant_identification}</Text>
                  </Flex>
                </Td>),
    modality: (<Td>
                  {row?.modality?.map(({name}) =>(
                    <Badge colorScheme='green' borderRadius={9}>{name}</Badge>
                  ))}
                </Td>),
    procedure: (<Td>
                  {row?.procedure?.map(({name}) =>(
                    <Badge colorScheme='red' borderRadius={9}>{name}</Badge>
                  ))}
                </Td>),
    actions: (<Td>
                <Menu w={10}>
                  <MenuButton as={Button} w={12} backgroundColor="transparent">
                    <FaEllipsisV />
                  </MenuButton>
                  <MenuList w={10}>
                    <MenuItem onClick={() => editDocument(row)} icon={<EditIcon color={'teal.300'}/>}> Editar</MenuItem>
                  </MenuList>
                </Menu>
              </Td>)
  }));

  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "scroll" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
      <Table
        colorScheme="blue"
        emptyData={{
          icon: RiMoonClearFill,
          text: "No hay información registrado."
        }}
        totalRegisters={data.length}
        page={page}
        onPageChange={(page) => setPage(page)}
        columns={captions}
        data={tableData}
      />
      </CardBody>
    </Card>
  );
};

export default Projects;
