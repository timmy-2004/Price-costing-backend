const itemModel = require('../model/category.model')

async function getAllCategory(request, response) {
    console.log('category');
    try{
        const category = await  categoryModel.find()
        response.status(200).send({
            status : "success",
            message: "category fetched succesfully",
            data: category
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
async function addCategory(request, response) {
    console.log('New category');
    try{
        let data = request.body
        const saveCategory = await  itemModel.create(data)
        response.status(200).send({
            status : "success",
            message: "category added succesfully",
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

async function updateCategory(request, response) {
    try{
        const categoryId = request.params.categoryId
        console.log(categoryId);
        const query = {categoryId :categoryId}
        const items = await  categoryModel.updateOne(query)
        response.status(200).send({
            status : "success",
            message: "category updated succesfully",
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
async function getCategoryById(request, response) {
    try{
        const categoryId = request.params.categoryId
        console.log(categoryId);
        const query = {categoryId :categoryId}
        const items = await  categoryModel.findOne(query)
        response.status(200).send({
            status : "success",
            message: "category fetched succesfully",
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
async function deleteCategoryById(request, response) {
    try{
        const categoryId = request.params.categoryId
        console.log(categoryId);
        const query = {categoryId :categoryId}
        const items = await  categoryModel.deleteOne(query)
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




module.exports = {getAllCategory, addCategory, updateCategory, getCategoryById, deleteCategoryById};