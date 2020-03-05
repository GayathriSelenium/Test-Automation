/**
 * Contains sagas for dealing with applications
 * @module sagas
 * @author Mark Colquhoun <mark.colquhoun@origin.com.au>
 */

import { call, put, takeLatest, all } from 'redux-saga/effects'
//import { getErrorMessage } from '../services'
import * as Api from '../services/recoveryForm'
import * as recoveryFormActions from '../ducks/recoveryForm'
import { getLoggedInUser } from '../services/token'

/**
 * Listens for application events
 */
export default function* sagas() {
    yield all([
        takeLatest(recoveryFormActions.CREATE_REQUEST, create),
    ])
}

function* create(action) {
    try {
        const newPayload = {
                ...action.payload,
                createdBy: getLoggedInUser().userId,
                createdAt: Date.now()
            } 
        console.log('show loading')
        yield put(recoveryFormActions.loading())
        const item = yield call(Api.createRecoveryStateChangeEvent, newPayload)
        console.log(item.data)
        if (item.data.statusCode === 200){
            yield put(recoveryFormActions.createSuccess(item.data))
        }else
        {
            yield console.log('Failed to save transaction', item)
            yield put(recoveryFormActions.createFailed(item.data))
        }

    } catch (error) {
        console.error(error)
    } finally {
        console.log('Transaction Complete')
    }
}