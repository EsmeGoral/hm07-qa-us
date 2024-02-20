// eslint-disable-next-line no-undef
 config = require('../config'); 

test('Status code should be 200 in Delete while using Postman', async () => {
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





test('Response body should contain ok true status in Delete while using Postman', async () => {
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
