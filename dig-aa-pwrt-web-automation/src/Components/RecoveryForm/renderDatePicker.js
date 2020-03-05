import useStyles from './styles'
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';

import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';

const renderDatePicker = ({fieldID, input, inputType, label, value}) => {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    {...input}
                    format="yyyy-MM-dd"
                    margin="normal"
                    disableFuture
                    id={fieldID}
                    name={name}
                    label={label}
                    InputLabelProps={{
                    shrink: true
                }}
                    KeyboardButtonProps={{
                    'aria-label': 'change date'
                }}
                    className={inputType}
                    required/>
            </MuiPickersUtilsProvider>
        </FormControl>
    )
}

export default renderDatePicker;
