const itemModel = require('../model/items.model')

async function getAllItems(request, response) {
    console.log('item');
    try{
        const items = await  itemModel.find()
        response.status(200).send({
            status : "success",
            message: "items fetched succesfully",
            data: items
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


// createitem
async function addItems(request, response) {
    console.log('New item');
    try{
        let data = request.body
        const saveItem = await  itemModel.create(data)
        response.status(200).send({
            status : "success",
            message: "Price added succesfully",
            data: saveItem
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

async function updateItems(request, response) {
    try{
        const itemId = request.params.itemId
        console.log(itemId);
        const query = {itemId :itemId}
        const items = await  itemModel.updateOne(query, request.body)
        response.status(200).send({
            status : "success",
            message: "item updated succesfully",
            data: items
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

// get item by id
async function getItemsById(request, response) {
    try{
        const itemId = request.params.itemId
        console.log(itemId);
        const query = {itemId :itemId}
        const items = await  itemModel.findOne(query)
        response.status(200).send({
            status : "success",
            message: "item fetched succesfully",
            data: items
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

// delete by id
async function deleteItemsById(request, response) {
    try{
        const itemId = request.params.itemId
        console.log(itemId);
        const query = {itemId :itemId}
        const items = await  itemModel.deleteOne(query)
        response.status(200).send({
            status : "success",
            message: "item deleted succesfully",
            data: items
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




module.exports = {getAllItems, addItems, updateItems, getItemsById, deleteItemsById};