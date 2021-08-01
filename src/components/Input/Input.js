import React from 'react'
import { TextField } from '@material-ui/core'

export default function Input(props) {
    const {type, name, label, value, placeholder, error=null, onChange} = props
    return (
        <TextField
            variant = 'outlined'
            type = {type}
            label = {label}
            name={name}
            value = {value}
            placeholder={placeholder}
            onChange = {onChange}
            fullWidth
            {...(error && {error:true, helperText:error} )}
            margin={'normal'}
        />
    )
}