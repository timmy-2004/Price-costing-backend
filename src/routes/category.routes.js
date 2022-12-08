const {Router}= require('express');

const router = Router();
const categoryController = require('../controller/category.controller');

// const {createItemValidator} = require('../validator/category.validator')


 




 router.get('/',    categoryController.getAllItems);
 
 router.post('/addcategory',  categoryController.addItems);

 router.put('/:categoryId', categoryController.updateItems)

 router.get('/:categoryd', categoryController.getItemsById)

 router.delete('/:categoryId', categoryController.deleteItemsById)



 module.exports = router
