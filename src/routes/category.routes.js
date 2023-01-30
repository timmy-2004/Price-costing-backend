const {Router}= require('express');

const router = Router();
const categoryController = require('../controller/category.controller');
const {verifyToken} = require('../utils/helpers')
// const {createItemValidator} = require('../validator/category.validator')


 




 router.get('/',    categoryController.getAllCategory);
 
 router.post('/addcategory',verifyToken,categoryController.addCategory);

 router.put('/:categoryId',verifyToken,categoryController.updateCategory)

 router.get('/:categoryId',verifyToken,categoryController.getCategoryById)

 router.delete('/:categoryId',verifyToken,categoryController.deleteCategoryById)



 module.exports = router
