// Chakra imports
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UsersTable from "./components/UsersTable";
import Projects from "./components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import { getUsers } from "services/apis/user/userServices";
import { arrayMapper } from "utils/arrays.utils";
import { UsersForm } from "./components/UsersForm";

function Users() {

  const [ users, setUsers ] = useState([]);
  const [ dataUser, setDataUser ] = useState([]);

  useEffect(() => {
    getUsers().then( resp => {
      setUsers(arrayMapper(resp)) 
    })
  },[])

  const hanledDataUser = ({...props}) => setDataUser(props);

  return (
    <Flex direction='column'>
      <UsersForm dataUser={dataUser} />
      <UsersTable
        title={"Usuarios"}
        captions={["Usuario", "Status", ""]}
        data={users}
        hanledDataUser={hanledDataUser}
      />
      <Projects
        title={"Projects Table"}
        captions={["Companies", "Budget", "Status", "Completion", ""]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default Users;
