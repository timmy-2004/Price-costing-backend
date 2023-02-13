const {Router}= require('express');

const router = Router();
const categoryController = require('../controller/category.controller');
const {verifyToken} = require('../utils/helpers')
// const {createItemValidator} = require('../validator/category.validator')


 




 router.get('/',   verifyToken, categoryController.getAllCategory);
 
 router.post('/addcategory',categoryController.addCategory);

 router.put('/:categoryId',verifyToken,categoryController.updateCategory)

 router.get('/:categoryId',verifyToken,categoryController.getCategoryById)

 router.delete('/:categoryId',verifyToken,categoryController.deleteCategoryById)



 module.exports = router
