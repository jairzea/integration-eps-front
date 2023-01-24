import { Button, Icon, Input, InputGroup, Text, useColorModeValue, Flex, FormControl, FormLabel, FormHelperText, Drawer, useDisclosure, DrawerOverlay, DrawerContent, DrawerHeader, DrawerCloseButton, DrawerBody, DrawerFooter, Textarea, Select, toast, useToast } from "@chakra-ui/react"
import SelectUI from "components/SelectUI/SelectUI";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { FaTimes } from "react-icons/fa";
import { handleDocuments } from "services/apis/documentsServices";
import { getModalities } from "services/apis/modalitieServices";
import { getProcedures } from "services/apis/procedureServices";
import { getTypesDocuments } from "services/apis/typeDocumentsServices";
import { formReset } from "utils/forms.utils";

export const Form = ({isOpenDrawer = false, editData = false }) => {
    const { handleSubmit, register, control, setValue, setError, formState, formState: { errors }, clearErrors, resetField } = useForm();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ optionsDocuments, setOptionsDocuments ] = useState([])
    const [ optionsProcedures, setOptionsProcedures ] = useState([])
    const [ optionsModalities, setOptionsModalities ] = useState([])
    const toast = useToast()

    useEffect(()=>{
        formReset(resetField)
        onOpen()
        getTypesDocuments().then(resp => setOptionsDocuments(resp))
        getModalities().then(resp => setOptionsProcedures(resp))
        getProcedures().then(resp => setOptionsModalities(resp))
        editData && (
            setValue('type', editData?.type?.id),
            setValue('applicant_name', editData?.applicant_name),
            setValue('applicant_identification', editData?.applicant_identification),
            setValue('modality_id', editData?.modalitie?.id),
            setValue('procedure_id', editData?.procedure?.id),
            setValue('internal_filing_number', editData?.internal_filing_number),
            setValue('filing_date', editData?.filing_date),
            setValue('address', editData?.address),
            setValue('stratum', editData?.stratum),
            setValue('neighborhood', editData?.neighborhood),
            setValue('use_of_property', editData?.use_of_property),
            setValue('zone', editData?.zone),
            setValue('real_estate_registration', editData?.real_estate_registration),
            setValue('cadastral_reference', editData?.cadastral_reference),
            setValue('resolution_number', editData?.resolution_number),
            setValue('date_resolution', editData?.date_resolution),
            setValue('enforceable', editData?.enforceable),
            setValue('description', editData?.description),
            setValue('state', editData?.state),
            setValue('window_number', editData?.window_number),
            setValue('file_path', editData?.file_path),
            setValue('id', editData?.id)
        )
    },[isOpenDrawer])

    const onChange = (e) => {
        const file = e.target.files[0];
        setValue('file', file);
        const formData = new FormData();

        formData.append("file", file);

        clearErrors('file')

    }
    
    const onSubmit = data => {
        handleDocuments(data, editData)
            .then(resp =>(
                toast({
                    title: 'Todo va bien',
                    description: resp?.message,
                    status: 'success',
                    position: 'top-right',
                    duration: 9000,
                    isClosable: true,
                  }),
                formReset(resetField)
            ))
            .catch(err => {
                const message = err?.response?.data?.message
                const newMessg = message?.split('/',2)
                const field = newMessg[1]?.replaceAll(' ', '_')
                setError(field, { type: "focus", message: 'Campo obligatorio' }, { shouldFocus: true})
                return toast({
                    title: 'Ocurrio un error',
                    description: newMessg[0] ?? message,
                    position: 'top-right',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                })
               
            })
    };

    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const inputBg = useColorModeValue("white", "gray.800");
    const inputSb = useColorModeValue("teal.300", "teal.800");

    const firstField = useRef()

    const props = {
        borderRadius:"15px",
        w:"465px",
        _focus:"{{borderColor: { mainTeal }}}",
        _active:"{{borderColor: { mainTeal }}}"
    }

    return (
        
        <Drawer
            initialFocusRef={firstField}
            isOpen={isOpen}
            size='lg'
            placement='right'
            onClose={() => { onClose(), isOpenDrawer = false}}
            isFullHeight={true}
        >
            <DrawerOverlay>
            <DrawerContent overflow='scroll'>
                <DrawerHeader>Crear nuevo documento</DrawerHeader>
                <DrawerCloseButton />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DrawerBody pb={6}>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Tipo de documento</FormLabel>
                                <SelectUI
                                    control={control}
                                    placeholder='Seleccione un tipo de documento'
                                    options={optionsDocuments}
                                    name="type"/>
                                    {errors.type && <p style={{ color: 'red' }}>{errors.type.message}</p>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>N° de ventanilla</FormLabel>
                                <Input
                                    type='number'
                                    {...register("window_number")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.window_number && <p style={{ color: 'red' }}>{errors.window_number.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <Text color='teal.400' align={'right'} fontSize='md' fontWeight='medium' mb={1}>Datos del solicitante</Text>
                        <hr style={{ borderColor : 'red' }}/>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>*Nombre</FormLabel>
                                <Input
                                    {...register("applicant_name")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.applicant_name && <FormHelperText style={{ color: 'red' }}>{errors.applicant_name.message}</FormHelperText>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Identificación</FormLabel>
                                <Input
                                    {...register("applicant_identification")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.applicant_identification && <p style={{ color: 'red' }}>{errors.applicant_identification.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <Text color='teal.400' align={'right'} fontSize='md' fontWeight='medium' mb={1} mt={5}>Datos generales</Text>
                        <hr style={{ borderColor : 'red' }}/>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Trámite</FormLabel>
                                <SelectUI
                                    control={control}
                                    placeholder='Seleccione un tipo de tramite'
                                    options={optionsProcedures}
                                    name="procedure_id"/>
                                    {errors.procedure_id && <p style={{ color: 'red' }}>{errors.procedure_id.message}</p>}
                                
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Modalidad</FormLabel>
                                <SelectUI
                                    control={control}
                                    placeholder='Seleccione un tipo de modalidad'
                                    options={optionsModalities}
                                    name="modality_id"/>
                                    {errors.modality_id && <p style={{ color: 'red' }}>{errors.modality_id.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>N° de Radicación</FormLabel>
                                <Input
                                    type='number'
                                    {...register("internal_filing_number")}
                                    fontSize="xs"
                                    py="10px"
                                    
                                />
                                {errors.internal_filing_number && <p style={{ color: 'red' }}>{errors.internal_filing_number.message}</p>}
                                
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Fecha de Radicación</FormLabel>
                                <Input
                                    type='date'
                                    {...register("filing_date")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.filing_date && <p style={{ color: 'red' }}>{errors.filing_date.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Dirección del Proyecto</FormLabel>
                                <Input
                                    {...register("address")}
                                    fontSize="xs"
                                    py="10px"
                                    
                                />
                                {errors.address && <p style={{ color: 'red' }}>{errors.address.message}</p>}
                                
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Barrio</FormLabel>
                                <Input
                                    {...register("neighborhood")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.neighborhood && <p style={{ color: 'red' }}>{errors.neighborhood.message}</p>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Estrato</FormLabel>
                                <Input
                                    {...register("stratum")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.stratum && <p style={{ color: 'red' }}>{errors.stratum.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Uso del Predio</FormLabel>
                                <Input
                                    {...register("use_of_property")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.use_of_property && <p style={{ color: 'red' }}>{errors.use_of_property.message}</p>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Zona</FormLabel>
                                <Input
                                    {...register("zone")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.zone && <p style={{ color: 'red' }}>{errors.zone.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Matricula Inmobiliaria</FormLabel>
                                <Input
                                    {...register("real_estate_registration")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.real_estate_registration && <p style={{ color: 'red' }}>{errors.real_estate_registration.message}</p>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Referencia Catastral</FormLabel>
                                <Input
                                    {...register("cadastral_reference")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.cadastral_reference && <p style={{ color: 'red' }}>{errors.cadastral_reference.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <Text color='teal.400' align={'right'} fontSize='md' fontWeight='medium' mb={1} mt={5}>Datos de la resolución</Text>
                        <hr style={{ borderColor : 'red' }}/>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>N° de resolución</FormLabel>
                                <Input
                                    type='number'
                                    {...register("resolution_number")}
                                    fontSize="xs"
                                    py="10px"
                                    
                                />
                                {errors.resolution_number && <p style={{ color: 'red' }}>{errors.resolution_number.message}</p>}
                                
                            </FormControl>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Fecha de resolución</FormLabel>
                                <Input
                                    type='date'
                                    {...register("date_resolution")}
                                    fontSize="xs"
                                    py="10px"
                                /> 
                                {errors.date_resolution && <p style={{ color: 'red' }}>{errors.date_resolution.message}</p>}
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight='light'>Ejecutoria</FormLabel>
                                <Input
                                    {...register("enforceable")}
                                    fontSize="xs"
                                    py="10px"
                                />
                                {errors.enforceable && <p style={{ color: 'red' }}>{errors.enforceable.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <Text color='teal.400' align={'right'} fontSize='md' fontWeight='medium' mb={1} mt={5}>Descripción y estado</Text>
                        <hr style={{ borderColor : 'red' }}/>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Descripción del proyecto</FormLabel>
                                <Textarea placeholder='Escribir...' {...register("description")}/>
                                {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
                            </FormControl>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Estado</FormLabel>
                                <Select placeholder='Seleccione un estado' {...register("state")}>
                                    <option value='Aprobado'>Aprobado</option>
                                    <option value='Desistido'>Desistido</option>
                                    <option value='Negado'>Negado</option>
                                </Select>
                                {errors.state && <p style={{ color: 'red' }}>{errors.state.message}</p>}
                            </FormControl>
                        </InputGroup>
                        <InputGroup props mt={2} mb={2}>
                            <FormControl mr={2}>
                                <FormLabel fontWeight='light'>Documento</FormLabel>
                                <Input
                                    type='file'
                                    fontSize="xs"
                                    py="10px"
                                    onChange={onChange}
                                />
                                {errors.file && <p style={{ color: 'red' }}>{errors.file.message}</p>}
                            </FormControl>
                        </InputGroup>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button type="submit" colorScheme='teal'>Enviar</Button>
                    </DrawerFooter>
                </form>
            </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}