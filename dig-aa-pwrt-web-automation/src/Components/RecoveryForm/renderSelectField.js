import useStyles from './styles'
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const renderSelectField = ({
    name,
    input,
    inputType,
    arrayToMap,
    label,
    fieldID,
    meta: {
        touched,
        error
    }
}) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl} id={fieldID}>
            <InputLabel shrink htmlFor={name}>
                {label}
            </InputLabel>
            <Select {...input} name={name}  className={inputType}>
                {arrayToMap.map(item => <MenuItem key={item} value={item}>{item}
                </MenuItem>)}
            </Select>
            <span className={classes.error}>{error && <span>{error}</span>}</span>
        </FormControl>
    )
}

export default renderSelectField;
