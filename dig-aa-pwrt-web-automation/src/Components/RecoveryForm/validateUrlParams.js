import recoveryStates from '../../Assets/recoveryStates'

const validateURLParameters = (wellNumber, currentRecoveryState) => {
    // Check that 'wellNumber' and 'currentRecoveryState' parameters are set
    if (
        wellNumber === null
        || currentRecoveryState === null
        || recoveryStates.get(currentRecoveryState) === undefined
    ) throw new Error("URL parameters 'wellNumber' and 'currentRecoveryState' are not set or invalid.");
}

export default validateURLParameters;
