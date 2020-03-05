import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import recoveryForm from './recoveryForm'
import data from './data'
export default combineReducers({
    recoveryForm,
    form: formReducer,
    data
})
