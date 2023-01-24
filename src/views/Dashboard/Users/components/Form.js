import { Button, Input, InputGroup, Text, useColorModeValue, Flex, useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaTimes } from "react-icons/fa";
import { storeUsers } from "services/apis/user/userServices";

export const Form = ({dataUser, cancelForm}) => {
    const { handleSubmit, setValue, register } = useForm();
    const toast = useToast()
    
    const { id, name, email, } = dataUser;

    useEffect(() => {
        setValue('name', name)
        setValue('email', email)
    },[dataUser])

    const onSubmit = data => {
        storeUsers(data)
            .then(resp => 
                toast({
                    title: 'Todo va bien',
                    description: resp?.message,
                    status: 'success',
                    position: 'top-right',
                    duration: 9000,
                    isClosable: true,
                })
            ).catch(err => 
                toast({
                    title: 'Ocurrio un error',
                    description: err?.response?.data?.message,
                    position: 'top-right',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
            )
    };
    
    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const inputBg = useColorModeValue("white", "gray.800");
    const inputSb = useColorModeValue("teal.300", "teal.800");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup
                borderRadius="15px"
                w="700px"
                _focus={{
                    borderColor: { mainTeal },
                }}
                _active={{
                    borderColor: { mainTeal },
                }}
            >
                <Input
                    bg={inputBg}
                    {...register("name")}
                    fontSize="xs"
                    py="11px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                    mr={2}
                />
                <Input
                    mr={2}
                    bg={inputBg}
                    {...register("email")}
                    fontSize="xs"
                    py="11px"
                    placeholder="Email"
                    borderRadius="inherit"
                />
                <Input
                    mr={2}
                    bg={inputBg}
                    {...register("password")}
                    fontSize="xs"
                    py="11px"
                    placeholder="Password"
                    borderRadius="inherit"
                    type='password'
                />
                <Input
                    type="submit"
                    mr={2}
                    bg={inputSb}
                    color='white'
                    fontSize="xs"
                    py="11px"
                    borderRadius="inherit"
                />
                 <Button
                    bg='red.300'
                    color='white'
                    fontSize="xs"
                    py="11px"
                    borderRadius="inherit"
                    onClick={() => cancelForm()}
                ><FaTimes /></Button>
                
            </InputGroup>
        </form>
    )
}