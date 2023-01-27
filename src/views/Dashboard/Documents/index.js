// Chakra imports
import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Projects from "./components/Projects";
import { dashboardTableData } from "variables/general";
import { arrayMapper } from "utils/arrays.utils";
import { Form } from "./components/Form";
import { getModalities } from "services/apis/modalitieServices";
import { getProcedures } from "services/apis/procedureServices";
import { getTypesDocuments } from "services/apis/typeDocumentsServices";import Header from "components/Header/Header";
import { FaCube, FaPlus } from "react-icons/fa";
import { getDocuments } from "services/apis/documentsServices";
import Filters from "./components/Filters";
import filterImg from "../../../assets/img/filter.png"

function Documents() {

  const [ isOpenDrawer, setIsOpenDrawer ] = useState();
  const [ documents, setDocuments ] = useState([]);
  const [ editDocuments, setEditDocuments ] = useState();
  const [ optionsDocuments, setOptionsDocuments ] = useState([])
  const [ optionsProcedures, setOptionsProcedures ] = useState([])
  const [ optionsModalities, setOptionsModalities ] = useState([])

  useEffect(()=>{
      getTypesDocuments().then(resp => setOptionsDocuments(resp))
      getModalities().then(resp => setOptionsModalities(resp))
      getProcedures().then(resp => setOptionsProcedures(resp))
  },[isOpenDrawer])


  const loadDocuments = (data = '') => {
    getDocuments(data).then( resp => {
      setDocuments(arrayMapper(resp)) 
    })
  }

  useEffect(() => {
    loadDocuments('')
  },[])


  const editDocument = (row) => (setEditDocuments(row), setIsOpenDrawer(!isOpenDrawer))

  const childrenComponente = (
    <>
      <Filters
        optionsDocuments={optionsDocuments}
        optionsProcedures={optionsProcedures}
        optionsModalities={optionsModalities} 
        handleFilter={loadDocuments}/> 
      <Button
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
      </Button>
    </>)

const tableColumns = [
  {
    Header: "Tipo de documento",
    accessor: "type"
  },
  {
    Header: "Número de radicación",
    accessor: "number_filing"
  },
  {
    Header: "Estado",
    accessor: "state"
  },
  {
    Header: "Solicitante",
    accessor: "applicant"
  },
  {
    Header: "Modalidad",
    accessor: "modality"
  },
  {
    Header: "Tramites",
    accessor: "procedure"
  },
  {
    Header: "",
    accessor: "actions"
  },
]

  return (
    <>
      <Form
        optionsDocuments={optionsDocuments}
        optionsProcedures={optionsProcedures}
        isOpenDrawer={isOpenDrawer} 
        editData={editDocuments} 
        reloadDocuments={loadDocuments}/>
      <Flex direction='column'>
        <Header
          avatarImage={filterImg}
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
            captions={tableColumns}
            data={documents}
          />
        
      </Flex>
    </>
  );
}

export default Documents;
