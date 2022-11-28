const {Router}= require('express');

const router = Router();
const userController = require('../controller/user.controller')
const {signUpValidator} = require('../validator/user.validator')
const { hashPassword,comparePassword } = require('../utils/helpers')



router.post('/signup',   userController.userSignup);

router.post('/signin',   userController.userLogin);

module.exports = router