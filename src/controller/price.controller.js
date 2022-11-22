const priceModel = require('../model/price.model')

async function getPriceHistory(request, response) {
    console.log('history');
    response.status(200).send("Gotten price history")
};

async function priceVerification(request, response) {
    console.log('history');
    response.status(200).send("Gotten price verification")
};

async function newPrice(request, response) {
    console.log('history');
    price =
    response.status(200).send("Gotten new price")
};



module.exports = {getPriceHistory, priceVerification, newPrice};