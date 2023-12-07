const userService=require('./userServices');

const findUserController=async(req,res)=>
{
    console.log(req.params.city);
    const result=await userService.findUserControllerDBService(req.params.city);

    if(result){
        res.send({"status":true, "data":result});
    }
    else{
        res.send({"status": false, "data": "City not found"});
    }
    }

    module.exports={findUserController};