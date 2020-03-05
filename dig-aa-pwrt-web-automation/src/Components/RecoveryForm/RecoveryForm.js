import React from 'react';
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {load as loadData} from '../../ducks/data'

import {Field, reduxForm} from 'redux-form';

import validateURLParameters from './validateUrlParams'
import validate from './validate'

import renderTextField from './renderTextField'
import renderSelectField from './renderSelectField'
import renderDatePicker from './renderDatePicker'

import useStyles from './styles'

const urlParams = new URLSearchParams(window.location.search);
const wellNumber = urlParams.get('wellNumber');
const currentRecoveryState = urlParams.get('currentRecoveryState');

// Test URL paramaters for wellNumber and currentRecoveryState are valid
try {
    validateURLParameters(wellNumber, currentRecoveryState);
} catch (error) {
    document.write(`
    <center>
    <strong>${error}</strong></br></br>
    <textarea cols=50 rows=5>wellNumber: ${urlParams.get('wellNumber')}\ncurrentRecoveryState: ${urlParams.get('currentRecoveryState')}
    </textarea>
    </center>
    `);
}

let RecoveryForm = (props) => {
    const {error, handleSubmit, pristine, reset, submitting} = props

    const classes = useStyles();

    // Handlers
    const changeHandlerOptions = (evt) => {
        props.updateStateReasons(evt.target.value)
    }

    // Form rendering
    props.updateStateOptions(urlParams.get('currentRecoveryState'));

    return (
        <Grid container spacing={3} justify="center">
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h2" gutterBottom>
                        Manual State Change
                    </Typography>
                </Grid>
                <form
                    onSubmit={handleSubmit(data => props.onSubmitHandler(data))}
                    className={classes.root}
                    autoComplete="off">
                    <Grid item xs={12}>
                        <Field
                            name="wellNumber"
                            label="Well Number"
                            fieldID="well-number"
                            inputType={classes.textField}
                            component={renderTextField}
                            InputProps={{
                            readOnly: true
                        }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="currentRecoveryState"
                            label="Current Recovery State"
                            fieldID="current-recovery-state"
                            inputType={classes.textField}
                            component={renderTextField}
                            InputProps={{
                            readOnly: true
                        }}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="newRecoveryState"
                            label="New Recovery State"
                            fieldID="new-recovery-state"
                            inputType={classes.selectField}
                            arrayToMap={props.recoveryStates}
                            component={renderSelectField}
                            onChange={(evt) => {
                                changeHandlerOptions(evt);
                                props.change('recoveryReason',''); // Clear the recovery reason field in case it's options are changed
                            }
                        }/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="recoveryReason"
                            label="Recovery Reason"
                            fieldID="recovery-reason"
                            inputType={classes.selectField}
                            arrayToMap={props.recoveryStateReasons}
                            component={renderSelectField}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="effectiveDate"
                            label="Effective Date"
                            fieldID="effective-date"
                            inputType={classes.datePicker}
                            component={renderDatePicker}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="comment"
                            label="Comment"
                            fieldID="comment"
                            inputType={classes.textField}
                            component={renderTextField}
                            textFieldOptions={{
                                multiline: true,
                                rows: 4,
                            maxLength: 250
                        }}/>
                    </Grid>
                    <Grid item xs={12} align="right">
                        <Button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={reset}
                            variant="contained"
                            className={classes.button}
                            color="secondary">
                            Clear
                        </Button>
                        <Button
                            type="submit"
                            disabled={!props.valid || pristine || submitting}
                            variant="contained"
                            className={classes.button}
                            color="primary">
                            Save
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    );
}

RecoveryForm = reduxForm({
    form: 'recoveryForm', // a unique identifier for this form
    validate
})(RecoveryForm)

RecoveryForm = connect(state => ({
    initialValues: {
        ...state.data,
        wellNumber: urlParams.get('wellNumber'),
        currentRecoveryState: urlParams.get('currentRecoveryState')
    } // pull initial values from account reducer
}), {load: loadData} // bind account loading action creator
)(RecoveryForm)

export default RecoveryForm
