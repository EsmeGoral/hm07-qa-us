// eslint-disable-next-line no-undef
const config = require('../config');

let requestBody = {
      "productsList": [
    {
      "id": 5,
      "quantity": 1
    }
  ]
}

test('Code should return 201 status in POST while using Postman', async () => {
let actualstatusCode;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                actualstatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
        expect(actualstatusCode).toBe(201);
});






test('Resonse body should contain the Courier service "order and go" in POST while using Postman', async () => {
let actualresponseBody;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
                actualresponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
        expect(actualresponseBody["courierService"]).toBe("Order and Go");
});

