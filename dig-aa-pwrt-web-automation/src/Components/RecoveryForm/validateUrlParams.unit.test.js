import validateURLParameters from './validateUrlParams'

test('Test URL paramters', () => {
    // Valid URL definitions
    expect(() => {validateURLParameters('CFE001','Failed')}).not.toThrow();
    
     // Incomplete URL definitions
    expect(() => {validateURLParameters(null,null)}).toThrow();
    expect(() => {validateURLParameters(null,'Failed')}).toThrow();
    expect(() => {validateURLParameters('CFE001',null)}).toThrow();

    // Invalid current recovery state
    expect(() => {validateURLParameters('CFE001','Invalid State Value')}).toThrow();

})