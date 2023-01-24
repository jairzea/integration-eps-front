import { Button, Icon, Input, InputGroup, Text, useColorModeValue, Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { FaTimes } from "react-icons/fa";

export const Form = ({dataUser, cancelForm}) => {
    const { handleSubmit, setValue, register } = useForm();

    const { id, name, email, } = dataUser;

    useEffect(() => {
        setValue('name', name)
        setValue('email', email)
    },[dataUser])

    const onSubmit = data => console.log(newUser, data);
    
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