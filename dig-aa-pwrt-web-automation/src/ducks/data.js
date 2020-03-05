 // Quack! This is a duck. https:/ / github.com / erikras / ducks - modular - redux
const LOAD = 'recoveryForm/LOAD'

const initialValue = {
    effectiveDate: Date.now(),
}

const reducer = (state =initialValue , action) => {
    switch (action.type) {
        case LOAD:
            return {
                data: action.data
            }
            default:
                return state
    }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({
    type: LOAD,
    data
})

export default reducer