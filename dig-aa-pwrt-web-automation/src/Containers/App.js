import React from 'react';
import './App.css';

import { compose } from 'redux'
import { connect } from 'react-redux'

import RecoveryForm from '../Components/RecoveryForm/RecoveryForm'
import * as recoveryFormActions from '../ducks/recoveryForm'
import Loading from '../Components/Loading/Loading'
import Success from '../Components/Success/Success'
import Error from '../Components/Error/Error'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = (props) => {

  const classes = useStyles();

  switch (props.appState) {
    case 'loading':
      return (<Loading/>)
    case 'success':
      return (<Success/>)
    case 'error':
      return (<Error/>)  
    default:
      return (
        <div className="root">
        <AppBar position="static" color="primary">
        <Toolbar color="inherit">
          <Typography variant="h6" className={classes.title}>
            Post Workover Recovery Tool
          </Typography>
        </Toolbar>
      </AppBar>
        <RecoveryForm 
        recoveryStates={props.recoveryStates}
        recoveryStateReasons={props.recoveryStateReasons}
        onSubmitHandler={props.create}
        updateStateReasons={props.updateStateReasons}
        updateStateOptions={props.updateStateOptions}
        newRecoveryState={props.newRecoveryState}
        />
      </div>
      ) 
  }
}

const mapStateToProps = ({ recoveryForm }) => {
  return ({ 
    recoveryStates: recoveryForm.recoveryState,
    recoveryStateReasons: recoveryForm.recoveryStateReasons,
    appState: recoveryForm.appState
  })
}

export default compose(
  connect(
      mapStateToProps,
      { ...recoveryFormActions }
  )
)(App)