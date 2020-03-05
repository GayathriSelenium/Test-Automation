import recoveryStateReasons from '../Assets/recoveryStateReasons'
import recoveryState from '../Assets/recoveryStates'

/**
 * Contains application action handlers and reducer
 * @module ducks
 */
/**
 * Actions
 */

export const CREATE_REQUEST = 'recoveryForm/CREATE_REQUEST'
export const CREATE_SUCCESS = 'recoveryForm/CREATE_SUCCESS'
export const CREATE_FAILED = 'recoveryForm/CREATE_FAILED'
export const LOADING = 'recoveryForm/LOADING'
export const UPDATE_STATE_REASONS = 'recoveryForm/UPDATE_STATE_REASONS'
export const UPDATE_STATE_OPTIONS = 'recoveryForm/UPDATE_STATE_OPTIONS'

/**
 * Reducer
 */

const initialState = {
    recoveryState: [],
    recoveryStateReasons: [],
    appState: "form"
}

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_SUCCESS:
            return {...state, response:action.payload, appState: 'success'}
        case CREATE_FAILED:
            return {...state, response:action.payload, appState: 'error'}
        case LOADING:
            return {...state, response:action.payload, appState: 'loading'}    
        case UPDATE_STATE_REASONS: 
            // Mapping logic
            var options = recoveryStateReasons.get(action.payload);
            return {...state, response:action.payload, recoveryStateReasons: options}
        case UPDATE_STATE_OPTIONS:
             // Mapping logic
            var options = recoveryState.get(action.payload);
            return {...state, response:action.payload, recoveryState: options}
        default:
            return state
    }
}

/**
 * Action Creators
 */

export const create = query => {
    console.log('Action Creator fired')
    return { type: CREATE_REQUEST, payload: query }
}

export const updateStateReasons = query => {
    return { type: UPDATE_STATE_REASONS, payload: query }
}

export const updateStateOptions = query => {
    return { type: UPDATE_STATE_OPTIONS, payload: query }
}

export const createSuccess = item => {
    return { type: CREATE_SUCCESS, payload: item }
}

export const createFailed = error => {
    return { type: CREATE_FAILED, payload: error }
}

export const loading = error => {
    return { type: LOADING, payload: error }
}