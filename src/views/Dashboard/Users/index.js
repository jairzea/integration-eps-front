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

  const loadUsers = () => {
    getUsers().then( resp => {
      setUsers(arrayMapper(resp)) 
    })
  }

  useEffect(() => {
    loadUsers()
  },[])

  const hanledDataUser = ({...props}) => setDataUser(props);

  const tableColumns = [
    {
      Header: "Usuario",
      accessor: "user"
    },
    {
      Header: "Status",
      accessor: "status"
    },
    {
      Header: "",
      accessor: "actions"
    },
  ]
  return (
    <Flex direction='column'>
      <UsersForm dataUser={dataUser} reloadUsers={loadUsers}/>
      <UsersTable
        title={"Usuarios"}
        captions={tableColumns}
        data={users}
        hanledDataUser={hanledDataUser}
      />
    </Flex>
  );
}

export default Users;
