const {Router}= require('express');

const router = Router();
const priceController = require('../controller/price.controller')


 




 router.get('/history',    priceController.getPriceHistory);
 
 router.get('/verification', priceController.priceVerification);

 router.post('/acceptnewprice', priceController.newPrice)

 module.exports = router



