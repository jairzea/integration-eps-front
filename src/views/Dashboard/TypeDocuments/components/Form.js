import { Button, Icon, Input, InputGroup, Text, useColorModeValue, Flex, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { FaTimes } from "react-icons/fa";

export const Form = ({cancelForm}) => {
    const { handleSubmit, setValue, register } = useForm();

    const onSubmit = data => console.log(newUser, data);
    
    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const inputBg = useColorModeValue("white", "gray.800");
    const inputSb = useColorModeValue("teal.300", "teal.800");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                    {...register("name")}
                    fontSize="xs"
                    py="10px"
                    placeholder="Nombres"
                    borderRadius="inherit"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <InputGroup
                borderRadius="15px"
                w="300px"
                _focus={{
                    borderColor: { mainTeal },
                }}
                _active={{
                    borderColor: { mainTeal },
                }}
            >
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
                >Limpiar</Button>
                
            </InputGroup>
        </form>
    )
}