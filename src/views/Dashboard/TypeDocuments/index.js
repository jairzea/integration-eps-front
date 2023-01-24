// Chakra imports
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Projects from "./components/Projects";
import { dashboardTableData } from "variables/general";
import { getUsers } from "services/apis/user/userServices";
import { arrayMapper } from "utils/arrays.utils";
import { Form } from "./components/Form";
import ProjectsForm from "./components/ProjectsForm";

function Documents() {

  const [ users, setUsers ] = useState([]);
  const [ dataUser, setDataUser ] = useState([]);

  useEffect(() => {
    getUsers().then( resp => {
      setUsers(arrayMapper(resp)) 
    })
  },[])

  const hanledDataUser = ({...props}) => setDataUser(props);

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
       
        <Grid templateRows='repeat(2, 1fr)' templateColumns={{ sm: "1fr", xl: "repeat(5, 1fr)" }} gap={4}>
            <GridItem colSpan={4} >
                <ProjectsForm title={'Crear Documento'} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                <Projects
                    title={"Documentos"}
                    captions={["Companies", "Budget", "Status", "Completion", ""]}
                    data={dashboardTableData}
                />
            </GridItem>
        </Grid>
      
    </Flex>
  );
}

export default Documents;
