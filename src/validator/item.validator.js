const { check, validationResult } = require('express-validator');

exports.createItemValidator = [
  check('itemId')
    .trim()
    .isString()
    .withMessage('itemId Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'itemId  is required. Minimum of three characters required.'
    ),
    check('picture')
    .trim()
    .isString()
    .withMessage('image Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'image is required. Minimum of three characters required.'
    ),
    check('description')
    .trim()
    .isString()
    .withMessage('description Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'description is required. Minimum of three characters required.'
    ),
    check('tags')
    .trim()
    .isString()
    .withMessage('tags Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'tag is required. Minimum of three characters required.'
    ),
    check('manufacturer')
    .trim()
    .isString()
    .withMessage('vendor name Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'vendor name  is required. Minimum of three characters required.'
    ),
    check('vendorAddress')
    .trim()
    .isString()
    .withMessage('vendor address Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'vendor address  is required. Minimum of three characters required.'
    ),
    check('modelNum')
    .trim()
    .isString()
    .withMessage('modelNum number Has to be a number.')
    .isLength({ min: 1 })
    .withMessage(
      'modelNum  is required. Minimum of three characters required.'
    ),
    check('title')
    .trim()
    .isString()
    .withMessage('title  Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'phone number  is required. Minimum of three characters required.'
    ),
    check('categoryId')
    .trim()
    .isString()
    .withMessage('categoryId Has to be a string.')
    .isLength({ min: 3 })
    .withMessage(
      'phone number  is required. Minimum of ten characters required.'
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
