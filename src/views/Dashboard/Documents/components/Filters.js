import { Search2Icon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, useColorModeValue } from "@chakra-ui/react"
import SelectUI from "components/SelectUI/SelectUI";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { AiOutlineClear } from "react-icons/ai";
import fields  from "../variables/fields.json";
import criterion  from "../variables/criterion.json";
import { formReset } from "utils/forms.utils";

const Filters = ({
    optionsDocuments, 
    optionsProcedures,
    optionsModalities,
    handleFilter}) => {
    const { handleSubmit, register, control, setValue, resetField, getValues } = useForm();
    const [ type, setType ] = useState('text')
    const [ isBetween, setIsBetween ] = useState(false)
    const [ isSelectLabel, setIsSelectLabel ] = useState(false)
    const [ optionsSelect, setOptionsSelect ] = useState([])


    const inputBg = useColorModeValue("white", "gray.800");
    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const inputSb = useColorModeValue("teal.300", "teal.800");
    const colorSe = useColorModeValue("gray.500", "gray.600");

    const onSubmit = data => handleFilter(data)

    const resetFieldsDefaultStatus = () => {
        setIsSelectLabel(false)
        setType('text')
    }

    const onChange = (e) => {
        const value = e?.target?.value;
        setValue('field', value)
        changeFieldValue()
    }

    const changeFieldValue = () => {

        const valueField = getValues('field')
        const valueCriterion = getValues('criterion')
        console.log('valueCriterion', valueCriterion)

        resetFieldsDefaultStatus()

        setIsBetween(valueCriterion === 'Between')

        if (['created_at', 'updated_at', 'date_resolution', 'filing_date'].includes(valueField)) {
            setType('date')
            return
        } 

        if (['=', '<>'].includes(valueCriterion)) {

            if (valueField == 'type') {
                setIsSelectLabel('Tipo de documento')
                setOptionsSelect(optionsDocuments)
                return
            }
    
            if (valueField == 'procedure_id') {
                setIsSelectLabel('Tramite')
                setOptionsSelect(optionsProcedures)
                return
            }
    
            if (valueField == 'modality_id') {
                setIsSelectLabel('Modalidad')
                setOptionsSelect(optionsModalities)
                return
            }    
        }
    }

    const cancelForm = () => formReset(resetField)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup
            mt={5}
            align="center"
            borderRadius="15px"
            w="700px"
            _focus={{
                borderColor: { mainTeal },
            }}
            _active={{
                borderColor: { mainTeal },
            }}
        >
            <SelectUI
                control={control}
                placeholder='Campo'
                name='field'
                bg={inputBg}
                mr={2}
                fontSize="xs"
                color={colorSe}
                options={fields}
                onChange={onChange}
            />
            <SelectUI
                control={control}
                placeholder='Criterio'
                name='criterion'
                bg={inputBg}
                mr={2}
                fontSize="xs"
                color={colorSe}
                options={criterion}
                onChange={ (e) => {
                    resetFieldsDefaultStatus()
                    const value = e?.target?.value
                    setValue('criterion', value)
                    changeFieldValue()
                }}
            /> 
            {!isSelectLabel ? (<Input
                mr={2}
                bg={inputBg}
                {...register("value")}
                fontSize="xs"
                py="11px"
                placeholder="Valor"
                type={type}
            />) : (<SelectUI
                control={control}
                placeholder={isSelectLabel}
                name='value'
                bg={inputBg}
                mr={2}
                fontSize="xs"
                color={colorSe}
                options={optionsSelect}
            /> )}
            {isBetween && (<Input
                mr={2}
                bg={inputBg}
                {...register("value2")}
                fontSize="xs"
                py="11px"
                placeholder="Segundo Valor"
                type={type}
            />)}
            <Button
                bg='teal.300'
                color='white'
                mr={2}
                py="11px"
                p={0}
                borderRadius="inherit"
                type="submit"
            ><Search2Icon size={17} /></Button>
             <Button
                bg='red.300'
                color='white'
                mr={2}
                py="11px"
                p={0}
                borderRadius="inherit"
                onClick={() => cancelForm()}
            ><AiOutlineClear size={17} /></Button>
            
        </InputGroup>
    </form>
    )
}

export default Filters