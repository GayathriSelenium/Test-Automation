import * as recoveryFormActions from './recoveryForm'

test('return initial state', () => {
    const initialState = {
        recoveryState: [],
        recoveryStateReasons: [],
        appState: "form"
    }

    expect(recoveryFormActions.default(undefined, {
        type: undefined
    })).toEqual(initialState)
})

test('define recoveryForm/UPDATE_STATE_REASONS', () => {
    const recoveryState = 'In Recovery'
    const expectedAction = {
        type: 'recoveryForm/UPDATE_STATE_REASONS',
        payload: 'In Recovery'
    }

    expect(recoveryFormActions.updateStateReasons(recoveryState)).toMatchObject(expectedAction);
})

test('trigger recoveryForm/UPDATE_STATE_REASONS', () => {
    const recoveryStateInput = 'In Recovery'
    const expectedStates = ["Want to hold a high fluid level", "SC not achievable due to the current well completion", "Downhole gauge failed and is undetected", "SC not achievable due to turndown", "Gathering restrictions", "Mechanical restrictions", "Failed to restart after workover", "Overide erroneous state change", "Other"]
    const expectedResult = {
        "appState": "form",
        "recoveryState": [],
        "recoveryStateReasons": expectedStates,
        "response": recoveryStateInput
    };

    expect(recoveryFormActions.default(undefined, {
        type: recoveryFormActions.UPDATE_STATE_REASONS,
        payload: recoveryStateInput
    })).toEqual(expectedResult)

})

// ---

test('define recoveryForm/UPDATE_STATE_OPTIONS', () => {
    const recoveryState = 'In Recovery'
    const expectedAction = {
        type: 'recoveryForm/UPDATE_STATE_OPTIONS',
        payload: 'In Recovery'
    }

    expect(recoveryFormActions.updateStateOptions(recoveryState)).toMatchObject(expectedAction);
})

test('trigger recoveryForm/UPDATE_STATE_OPTIONS', () => {
    const recoveryStateInput = 'In Recovery'
    const expectedStates = ['Manually Recovered','Failed']
    const expectedResult = {
        "appState": "form",
        "recoveryState": expectedStates,
        "recoveryStateReasons": [],
        "response": recoveryStateInput
    };

    expect(recoveryFormActions.default(undefined, {
        type: recoveryFormActions.UPDATE_STATE_OPTIONS,
        payload: recoveryStateInput
    })).toEqual(expectedResult)

})
