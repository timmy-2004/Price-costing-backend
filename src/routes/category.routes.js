const {Router}= require('express');

const router = Router();
const categoryController = require('../controller/category.controller');

// const {createItemValidator} = require('../validator/category.validator')


 




 router.get('/',    categoryController.getAllCategory);
 
 router.post('/addcategory',  categoryController.addCategory);

 router.put('/:categoryId', categoryController.updateCategory)

 router.get('/:categoryId', categoryController.getCategoryById)

 router.delete('/:categoryId', categoryController.deleteCategoryById)



 module.exports = router
