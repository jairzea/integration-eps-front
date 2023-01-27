import { Controller } from "react-hook-form"

const { Select } = require("@chakra-ui/react")
import Multiselect from 'multiselect-react-dropdown';

const SelectUI = ({defaultValue, control, name, placeholder, options = [], multi = false, onChangeMulti, onRemove, ...props}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => {
                return (<>
                        {multi ? (<Multiselect
                                        options={options} 
                                        selectedValues={defaultValue}
                                        onSelect={onChangeMulti}
                                        onRemove={onRemove}
                                        displayValue="name"
                                    />) : (<Select 
                                        name={name} 
                                        placeholder={placeholder}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                        {...props}
                                    >
                                    {options?.map(({id, name}) => (<option value={id}>{name}</option>))}
                                    </Select>)
                                    }
                                    </>)
            }}
        />
    )
}

export default SelectUI