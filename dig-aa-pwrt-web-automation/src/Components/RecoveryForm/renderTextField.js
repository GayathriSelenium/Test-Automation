import useStyles from './styles'
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
    name,
    fieldID,
    input,
    inputType,
    label,
    textFieldOptions,
    InputProps,
    meta: {
        touched,
        error
    }
}) => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <TextField
                {...input}
                {...textFieldOptions}
                InputProps={InputProps}
                id={fieldID}
                name={name}
                label={label}
                className={inputType}
                margin="normal"
                InputLabelProps={{
                shrink: true
            }}/>
            <span className={classes.error}>{error && <span>{error}</span>}</span>
        </FormControl>
    )
}

export default renderTextField;
