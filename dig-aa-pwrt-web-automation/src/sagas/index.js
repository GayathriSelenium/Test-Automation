import { all } from 'redux-saga/effects'
import recoveryFormSagas from './recoveryForm'

export default function* rootSaga() {
    yield all([recoveryFormSagas()])
}