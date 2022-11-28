const { check, userValidationResult } = require('express-validator');

exports.signUpValidator = [
  check('email')
    .trim()
    .isString()
    .withMessage('email Has to be a string.')
    .isLength({ min: 5 })
    .withMessage(
      'email  is required. Minimum of three characters required.'
    ),

    check('userName')
    .trim()
    .isAlphanumeric()
    .withMessage('userName has to be have letters and numbers')
    .isString()
    .withMessage('userName Has to be a string.')
    .isLength({ min: 5 })
    .withMessage(
      'userName  is required. Minimum of three characters required.'
    ),

    check('password')
    .trim()
    .isAlphanumeric()
    .withMessage('userName has to be have letters and numbers')
    .isString()
    .withMessage('userName Has to be a string.')
    .isLength({ min: 8 })
    .withMessage(
      'password  is required. Minimum of 8 characters required.'
    ),
    
    
    
  (req, res, next) => {
    const error = this.signUpValidator(req);
    if (!error.isEmpty())
      return res.status(400).send({
        error: error.array().map((signup) => `${signup.param} Error - ${signup.msg}`),
      });
    next();
  },
];

