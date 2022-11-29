const {Router}= require('express');

const router = Router();
const userController = require('../controller/user.controller')
const {signUpValidator} = require('../validator/user.validator')
const { hashPassword,comparePassword,verifyToken } = require('../utils/helpers')



router.post('/signup', signUpValidator,  userController.userSignup);

router.post('/signin',   userController.signin);


router.patch('/update-status/:userId', verifyToken,   userController.updateUserStatus);
router.get('/:userId', verifyToken, userController.getUserid)
// router.get('/allusers, verifyToken, userController.getAllUsers')

module.exports = router