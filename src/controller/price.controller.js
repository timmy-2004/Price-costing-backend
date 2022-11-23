const priceModel = require('../model/price.model')

// Price History for an item
async function getPriceHistoryForItem(request, response) {
    console.log('history');
    try{
        const itemId = request.params.itemId
        const query = {itemId :itemId}
        const prices = await  priceModel.find(query)
        response.status(200).send({
            status : "success",
            message: "Price fetched succesfully",
            data: prices
        })
    

    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
};

// all price history

async function getPriceHistory(request, response) {
    console.log('Price');
    try{
        const prices = await  priceModel.find()
        response.status(200).send({
            status : "success",
            message: "Price fetched succesfully",
            data: prices
        })
    

    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
};


// Price verification
async function priceVerification(request, response)  {
    console.log('history');
    response.status(200).send("Gotten price verification")
};

async function newPrice(request, response) {
    console.log('New price');
    try{
        let data = request.body
        const savePrice = await  priceModel.create(data)
        response.status(200).send({
            status : "success",
            message: "Price added succesfully",
            data: savePrice
        })
    
    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
 
};

// Price history by id
async function getPriceHistoryById(request, response) {
    console.log('Getting History by id');
    try{
        const id = request.params.id
        const query = {_id :id}
        const prices = await  priceModel.findOne(query)
        response.status(200).send({
            status : "success",
            message: "Price fetched succesfully",
            data: prices
        })
    

    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
};

// Price history by Status
async function getPriceHistoryByStatus(request, response) {
    console.log('Getting History by status');
    try{
        const status = request.params.status
        const query = {status:status}
        const prices = await  priceModel.find(query)
        response.status(200).send({
            status : "success",
            message: "Price fetched succesfully",
            data: prices
        })
    

    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
};

// Delete price history 
// Price history by Status
async function DeletePrice(request, response) {
    console.log('Getting History by status');
    try{
        const status  = request.params.status
        const query = {status:status}
        const prices = await  priceModel.find(query)
        response.status(200).send({
            status : "success",
            message: "Price fetched succesfully",
            data: prices
        })
    

    }catch(err){
        console.log(err)
        response.status(500).send({
            status : "error",
            message: "server error",
            data: null
        })
    }
};

module.exports = {DeletePrice,getPriceHistoryForItem,getPriceHistory,getPriceHistoryById,getPriceHistoryByStatus, priceVerification, newPrice};