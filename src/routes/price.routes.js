const {Router}= require('express');

const router = Router();
const priceController = require('../controller/price.controller')
const {createPriceValidator} = require('../validator/price.validator')
const {verifyToken} = require('../utils/helpers')

 



 router.get('/history/:itemId',    priceController.getPriceHistoryForItem);

 router.get('/',    priceController.getPriceHistory);

 router.get('/:id',    priceController.getPriceHistoryById);
 
  router.get('/status/:status', verifyToken, priceController.getPriceHistoryByStatus)
  
 
 router.get('/verification',  priceController.priceVerification);

 router.post('/acceptnewprice',  createPriceValidator,   priceController.newPrice)

 router.delete('/deletenewprice', createPriceValidator,   priceController.DeletePrice)


 module.exports = router



