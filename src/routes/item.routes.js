const {Router}= require('express');

const router = Router();
const itemController = require('../controller/items.controller');
const {verifyToken} = require('../utils/helpers')
const {createItemValidator} = require('../validator/item.validator')


 




 router.get('/',    itemController.getAllItems);
 
 router.post('/additems', createItemValidator, itemController.addItems);

 router.put('/:itemId', itemController.updateItems)

 router.get('/:itemId', verifyToken,itemController.getItemsById)

 router.delete('/:itemId',verifyToken,itemController.deleteItemsById)


 module.exports = router
