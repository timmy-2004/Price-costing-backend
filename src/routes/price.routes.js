const {Router}= require('express');

const router = Router();
const priceController = require('../controller/price.controller')
const {createPriceValidator} = require('../validator/price.validator')

 




 router.get('/history/:itemId',    priceController.getPriceHistoryForItem);

 router.get('/history',    priceController.getPriceHistory);

 router.get('/:id',    priceController.getPriceHistoryById);
 
  router.get('/status/:status',    priceController.getPriceHistoryByStatus)
  
 
 router.get('/verification', priceController.priceVerification);

 router.post('/acceptnewprice',createPriceValidator,   priceController.newPrice)

 router.post('/deletenewprice',createPriceValidator,   priceController.DeletePrice)


 module.exports = router



