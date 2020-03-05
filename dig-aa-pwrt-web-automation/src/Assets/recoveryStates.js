const recoveryStates = new Map();

recoveryStates.set('In Recovery',['Manually Recovered','Failed']);
recoveryStates.set('Awaiting Restart',['Failed']);
recoveryStates.set('Recovered',[]);
recoveryStates.set('Manually Recovered',['In Recovery']);
recoveryStates.set('Failed',['Awaiting Restart','In Recovery']);

export default recoveryStates;
