// Chakra imports
import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Projects from "./components/Projects";
import { dashboardTableData } from "variables/general";
import { arrayMapper } from "utils/arrays.utils";
import { Form } from "./components/Form";
import ProjectsForm from "./components/ProjectsForm";
import Header from "components/Header/Header";
import { FaCube, FaPlus } from "react-icons/fa";
import { getDocuments } from "services/apis/documentsServices";

function Documents() {

  const [ isOpenDrawer, setIsOpenDrawer ] = useState();
  const [ documents, setDocuments ] = useState([]);
  const [ editDocuments, setEditDocuments ] = useState();

  useEffect(() => {
    getDocuments().then( resp => {
      setDocuments(arrayMapper(resp)) 
    })
  },[])

  const editDocument = (row) => (setEditDocuments(row), setIsOpenDrawer(!isOpenDrawer))

  const childrenComponente = (<Button
    p='10px'
    bg='transparent'
    color='gray.500'
    border='1px solid lightgray'
    borderRadius='15px'
    mt= '-8px'
    h='90px'
    onClick={()=> editDocument(false)}
    minHeight={{ sm: "300px", md: "200%" }}>
       <Flex direction='column' justifyContent='center' align='center'>
           <Icon as={FaPlus} fontSize='sm' mb='12px' />
           <Text fontSize='sm' fontWeight='bold'>
              Agregar Documento
           </Text>
       </Flex>
  </Button>)

  return (
    <>
      <Form isOpenDrawer={isOpenDrawer} editData={editDocuments}/>
      <Flex direction='column'>
        <Header
          tabs={[
            {
            name: "OVERVIEW",
            icon: <FaCube w='100%' h='100%' />,
            child: childrenComponente
            }
        ]}
        />
        <Projects
            editDocument={editDocument}
            title={"Documentos"}
            captions={["Tipo de documento", "Número de radicación", "Estado", "Solicitante", "Modalidad", "Procedimiento"]}
            data={documents}
          />
        
      </Flex>
    </>
  );
}

export default Documents;
