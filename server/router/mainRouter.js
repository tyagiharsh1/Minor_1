const mainRouter=require('express').Router();
const authRouter=require('./authRouter');
const userRouter = require('./userRouter');
//for the authentication purpose
mainRouter.use('/auth',authRouter);
mainRouter.use('/user',userRouter);
module.exports=mainRouter;