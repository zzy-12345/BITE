//chargeGenerator.js

const url = 'https://api.commerce.coinbase.com/charges';

const requestBody = {
    local_price: {
        amount: '1.00', //price of charge
        currency: 'USD', //currency
    },
    pricing_type: 'fixed_price',

    name: 'Order',
    description: 'iPhone15 Pro Natural Titanium',
    redirect_url: 'https:/google.com', //optional redirect URL

    metadata: { //optional charge metadata
        id: 'Customer id',
     email: 'bobby@bite.com',
        address: '123 Lane',
    },
};

const payload = {
    method: 'POST',
    mode: 'cors',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'X-CC-Api-Key': process.env.COMMERCE_API_KEY,//API key from Commerce
        'X-CC-Api-Key': 'e6cb62bf-4582-4442-910e-c5cf2707134b',//API key from Commerce
    },
    body: JSON.stringify(requestBody),
};

async function createCharge() {
    try {
        const response = await fetch(url, payload);
        if (!response.ok) {
            throw new Error(`HTTP error Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error creating charge:", error);
    }
}

export { createCharge };