// Import all functions from cloudguard.js
const lambda = require('../../../src/handlers/cloudguard.js');

// This includes all tests for cloudguardHandler()
describe('Test for cloudguard.js', function () {
    // This test invokes cloudguardHandler() and compare the result 
    it('Verifies successful response', async () => {
        // Invoke cloudguardHandler()
        const result = await lambda.cloudguardHandler();
        /* 
            The expected result should match the return from your Lambda function.
            
        /*
        const expectedResult = 'Serverless Apps secured by CloudGuard Workload!';
        // Compare the result with the expected result
        expect(result).toEqual(expectedResult);
    });
});
