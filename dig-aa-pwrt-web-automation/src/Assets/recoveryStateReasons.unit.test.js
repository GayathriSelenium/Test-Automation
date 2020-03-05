import recoveryStateReasons from "./recoveryStateReasons"

test('testing recovery state reasons map', () => {
    expect(recoveryStateReasons.get('In Recovery')).toStrictEqual(['Want to hold a high fluid level', 'SC not achievable due to the current well completion', 'Downhole gauge failed and is undetected', 'SC not achievable due to turndown', 'Gathering restrictions', 'Mechanical restrictions', 'Failed to restart after workover', 'Overide erroneous state change', 'Other']);
    expect(recoveryStateReasons.get('Awaiting Restart')).toStrictEqual(['Failed to restart after workover','Awaiting workover','Overide erroneous state change','Other']);
    expect(recoveryStateReasons.get('Recovered')).toStrictEqual(['Overide erroneous state change','Other']);
    expect(recoveryStateReasons.get('Manually Recovered')).toStrictEqual(['Overide erroneous state change','Other']);
    expect(recoveryStateReasons.get('Failed')).toStrictEqual(['Failed to restart after workover','Awaiting workover'])
});
