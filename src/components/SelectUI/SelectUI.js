import { Controller } from "react-hook-form"

const { Select } = require("@chakra-ui/react")

const SelectUI = ({control, name, placeholder, options = [], ...props}) => {
    console.log(options)
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Select 
                    name={name} 
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                    {...props}
                    >
                    {options?.map(({id, name}) => (<option value={id}>{name}</option>))}
                </Select>
            )}
        />
    )
}

export default SelectUI