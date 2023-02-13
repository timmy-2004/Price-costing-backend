const { check, validationResult } = require('express-validator');

exports.createPriceValidator = [
    check('price')
    .trim()
    .isString()
    .withMessage('price Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'price  is required. Minimum of three characters required.'
    ),
    
  (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty())
      return res.status(400).send({
        error: error.array().map((item) => `${item.param} Error - ${item.msg}`),
      });
    next();
  },
];

