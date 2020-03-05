import {makeStyles} from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        marginTop: '20px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        width: 400,
        marginTop: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectLabel: {
        paddingLeft: '10px'
    },
    selectField: {
        marginBottom: theme.spacing(1),
        width: 400
    },
    datePicker: {
        marginLeft: theme.spacing(0),
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400
    },
    button: {
        margin: theme.spacing(1)
    },
    error: {
        fontSize: '10px',
        color: 'rgb(255,20,20)'
    }
}));

export default useStyles;
