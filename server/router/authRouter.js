const authRouter=require('express').Router();
const{loginController,signupController}=require('../controllers/authController')
authRouter.post('/login',loginController);
authRouter.post("/signup",signupController);
module.exports=authRouter;