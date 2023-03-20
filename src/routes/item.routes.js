const {Router}= require('express');

const router = Router();
const itemController = require('../controller/items.controller');
const {verifyToken} = require('../utils/helpers')
const {createItemValidator} = require('../validator/item.validator')


 




 router.get('/',    itemController.getAllItems);
 
 router.post('/additems',  createItemValidator, itemController.addItems);

//  router.put('/array/:itemId', verifyToken, itemController.updateItems)

 router.put('/:itemId', verifyToken, itemController.updatePriceHistory)

 router.put('/:itemId',verifyToken,itemController.updateItemPic)


 router.get('/:itemId',  itemController.getItemsById)

 router.delete('/:itemId',itemController.deleteItemsById)


 module.exports = router
