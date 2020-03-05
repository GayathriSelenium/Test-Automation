const recoveryStateReasons = new Map();

recoveryStateReasons.set('In Recovery',['Want to hold a high fluid level', 'SC not achievable due to the current well completion', 'Downhole gauge failed and is undetected', 'SC not achievable due to turndown', 'Gathering restrictions', 'Mechanical restrictions', 'Failed to restart after workover', 'Overide erroneous state change', 'Other']);
recoveryStateReasons.set('Awaiting Restart',['Failed to restart after workover','Awaiting workover','Overide erroneous state change','Other']);
recoveryStateReasons.set('Recovered',['Overide erroneous state change','Other']);
recoveryStateReasons.set('Manually Recovered',['Overide erroneous state change','Other']);
recoveryStateReasons.set('Failed',['Failed to restart after workover','Awaiting workover']);

export default recoveryStateReasons
