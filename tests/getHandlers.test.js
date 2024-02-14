// eslint-disable-next-line no-undef
const config = require('../config');

test('Code should return 200 status', async () => {
let actualstatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);                  
        actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
   expect(actualstatusCode).toBe(200);
});


// eslint-disable-next-line no-undef
const config = require('../config');

test('Code should return 200 status', async () => {
let actualstatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
   expect(actualstatusCode).toBe(400);
});


// eslint-disable-next-line no-undef
const config = require('../config');

test('Body should contain the kit name "For picnic" in GET', async () => {
 let  actualresponseBody;
	try {
	const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualresponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
         expect(actualresponseBody["name"]).toBe("For picnic");
});


// eslint-disable-next-line no-undef
const config = require('../config');

test('Body should contain the kit name "For picnic" in GET', async () => {
 let  actualresponseBody;
	try {
	const response = await fetch(`${config.API_URL}/api/v1/kits/1`);
        actualresponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
         expect(actualresponseBody["name"]).toBe("For picnic1");
});