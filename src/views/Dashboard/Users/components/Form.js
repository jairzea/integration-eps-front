import { Button, Input, InputGroup, Text, useColorModeValue, Flex, useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { FaTimes } from "react-icons/fa";
import { handleUsers } from "services/apis/user/userServices";
import { formReset } from "utils/forms.utils";

export const Form = ({dataUser, cancelForm, reloadUsers}) => {
    const methods = useForm({ defaultValues: { name: "" } });
    const { handleSubmit, setValue, register, resetField } = methods
    const toast = useToast()

    const { id, name, email, } = dataUser;

    useEffect(() => {
        setValue('name', name)
        setValue('email', email)
    },[dataUser])

    const onSubmit = data => {
        handleUsers(data, id)
            .then(resp => (
                toast({
                    title: 'Todo va bien',
                    description: resp?.message,
                    status: 'success',
                    position: 'top-right',
                    duration: 9000,
                    isClosable: true,
                }),
                reloadUsers(),
                formReset(resetField)
            )).catch(err => 
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
        <FormProvider {...methods} >
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
                        inputName="name"
                        bg={inputBg}
                        {...register("name")}
                        fontSize="xs"
                        py="11px"
                        placeholder="Nombres"
                        borderRadius="inherit"
                        mr={2}
                    />

                <Input
                    inputName="email"
                    mr={2}
                    bg={inputBg}
                    {...register("email")}
                    fontSize="xs"
                    py="11px"
                    placeholder="Email"
                    borderRadius="inherit"
                />

                <Input
                    inputName="password"
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
        </FormProvider>
    )
}