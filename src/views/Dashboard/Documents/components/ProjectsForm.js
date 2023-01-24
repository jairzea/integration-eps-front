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
  import React from "react";
import { Form } from "./Form";
  
  const ProjectsForm = ({ title, captions, data }) => {
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
          <Form />
        </CardBody>
      </Card>
    );
  };
  
  export default ProjectsForm;
  