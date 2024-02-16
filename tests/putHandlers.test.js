// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = { "productsList": [
        {
            "id": 1,
            "quantity": 1
        },
        {
            "id": 6,
            "quantity": 1
        }
    ]}

test('Code should return 200 status in PUT', async () => {
let actualstatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                 actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
         expect(actualstatusCode).toBe(200);
});


  requestBody : { "productsList"; [
        {
            "id": 1,
            "quantity": 1
        },
        {
            "id": 6,
            "quantity": 1
        }
    ]};

test('Response Body should contain Ok True', async () => {
let actualresponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                 actualresponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
         expect(actualresponseBody["ok"]).toBe(true);
});