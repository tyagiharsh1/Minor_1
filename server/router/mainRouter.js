const mainRouter=require('express').Router();
const authRouter=require('./authRouter');
//for the authentication purpose
mainRouter.use('/auth',authRouter);
module.exports=mainRouter;