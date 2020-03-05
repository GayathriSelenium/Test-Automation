import validate from './validate'

test('Test form validation', () => {

    // Mock form data
    var testObject = {
        comment: "Test comment",
        currentRecoveryState: "Failed",
        effectiveDate: 1569991895038,
        newRecoveryState: "Awaiting Restart",
        recoveryReason: "Failed to restart after workover",
        wellNumber: "CFE015"
    };

    // Valid form values
    expect(validate(testObject)).toMatchObject({});

    // Test required fields
    //// Comment not set
    expect(validate({...testObject, comment: "" })).toMatchObject({
        "comment": "Required"
    });

    //// newRecoveryState not set
    expect(validate({...testObject, newRecoveryState: "" })).toMatchObject({
        "newRecoveryState": "Required"
    });
    
    //// recoveryReason not set
    expect(validate({...testObject, recoveryReason: "" })).toMatchObject({
        "recoveryReason": "Required"
    });

    // Comment field too long
    expect(validate({...testObject, comment: "_".repeat(251) })).toMatchObject({
        "comment": "Invalid comment"
    });
})
