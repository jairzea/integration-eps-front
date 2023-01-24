// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import pdf from "../../../../assets/img/pdf.png";
import React from "react";

const Projects = ({editDocument, title, captions, data }) => {
  
  const deleteDocument = (row) => alert(row)

  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <TablesProjectRow
                  key={row.name}
                  name={row?.type?.name}
                  logo={pdf}
                  path={row.file_path}
                  status={row.state}
                  internal_filing_number={row.internal_filing_number}
                  applicant_name={row.applicant_name}
                  applicant_identification={row.applicant_identification}
                  modalitie={row?.modalitie?.name}
                  procedure={row?.procedure?.name}
                  data={row}
                  editDocument={editDocument} 
                  deleteDocument={deleteDocument}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Projects;
