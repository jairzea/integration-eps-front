import { Button, Icon, Text, Flex } from "@chakra-ui/react"
import Header from "components/Header/Header"
import { useEffect, useState } from "react"
import { FaCube, FaPlus } from "react-icons/fa"
import { Form } from "./Form"

export const UsersForm = ({dataUser, reloadUsers}) => {

    const [ user, setUser ] = useState(false)

    const cancelForm = () => setUser(false)

    const { avatarGamer, name, email, } = user;

    useEffect( () => {
        Boolean(dataUser.id) && setUser(dataUser)
    },[dataUser])

    const childrenComponente = user ? (<Form dataUser={user} cancelForm={cancelForm} reloadUsers={reloadUsers} />) : (<Button
                     p='10px'
                     bg='transparent'
                     color='gray.500'
                     border='1px solid lightgray'
                     borderRadius='15px'
                     mt= '-8px'
                     h='90px'
                     onClick={ () => setUser(true)}
                     minHeight={{ sm: "300px", md: "200%" }}>
                        <Flex direction='column' justifyContent='center' align='center'>
                            <Icon as={FaPlus} fontSize='sm' mb='12px' />
                            <Text fontSize='sm' fontWeight='bold'>
                                Crear nuevo Usuario
                            </Text>
                        </Flex>
                   </Button>)

    return (
        <Header
            avatarImage={avatarGamer ?? true}
            name={name}
            email={email}
            tabs={[
                {
                name: "OVERVIEW",
                icon: <FaCube w='100%' h='100%' />,
                child: childrenComponente
                }
            ]}
        />
    )
}