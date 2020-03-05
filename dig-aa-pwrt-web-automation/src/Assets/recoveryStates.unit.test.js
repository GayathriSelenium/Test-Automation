import recoveryStates from "./recoveryStates"

test('testing recovery states map', () => {
    expect(recoveryStates.get('In Recovery')).toStrictEqual(['Manually Recovered','Failed']);
    expect(recoveryStates.get('Awaiting Restart')).toStrictEqual(['Failed']);
    expect(recoveryStates.get('Recovered')).toStrictEqual([]);
    expect(recoveryStates.get('Manually Recovered')).toStrictEqual(['In Recovery']);
    expect(recoveryStates.get('Failed')).toStrictEqual(['Awaiting Restart','In Recovery'])
});
