// eslint-disable-next-line no-undef
 config = require('../config'); 

test('The status code of deleting the kit is 200', async () => {
	let actualstatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
        actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
 expect(actualstatusCode).toBe(200);
});





test('The response body should contain an ok true status', async () => {
let actualresponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
                actualresponseBody = await response.json();;
	} catch (error) {
		console.error(error);
	}
               expect(actualresponseBody["ok"]).toBe(true);
});
