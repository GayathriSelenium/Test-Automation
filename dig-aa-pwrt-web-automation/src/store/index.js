/**
 * Redux store
 * @module store
 * @author  <mark.colquhoun@origin.com.au>
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import reducers from '../ducks'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(sagas)

export default store
