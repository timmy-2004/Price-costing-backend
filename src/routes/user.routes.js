const {Router}= require('express');

const router = Router();
const userController = require('../controller/user.controller')
const {signUpValidator} = require('../validator/user.validator')
const { hashPassword,comparePassword,verifyToken } = require('../utils/helpers')



router.post('/signup', signUpValidator,  userController.userSignup);

router.post('/signin',   userController.signin);


router.patch('/update-status/:userId', userController.updateUserStatus);
router.get('/:userId', userController.getUserid)
router.get('/', userController.getAllUsers)

module.exports = router 