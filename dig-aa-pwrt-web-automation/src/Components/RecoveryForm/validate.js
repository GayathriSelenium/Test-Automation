// Validation Functions
const validate = values => {
    const errors = {}
    const requiredFields = ['comment', 'newRecoveryState', 'recoveryReason']

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })

    if (values.comment && values.comment.length > 250) {
        errors.comment = 'Invalid comment'
    }

    return errors
}

export default validate;
