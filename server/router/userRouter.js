const userRouter=require('express').Router();
const{findUserController}=require('../controllers/userController');

userRouter.get("/find/?:city",findUserController);

module.exports=userRouter;