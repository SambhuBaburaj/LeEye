const { UserData } = require("../Model/UserModel");
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const loginHelper=async (req,res)=>
{
await UserData.findOne({email:req.body.email}).then(data=>
    {
  ;
 if(data)
 {
  bcrypt.compare(req.body.password,data.password, function(err, result) {
      console.log(result);

     if(result)
     {
 
      const accessToken =jwt.sign(data.toJSON(),process.env.accessToken,{expiresIn:'20d'})
    
      res.status(200).json({accessToken,validate:data.validation})

     }
     else{
    res.status(401).json(false)

     }
  
  });

 }
 else
 {
    res.status(401).json(false)
 }

    })


}
const Validater=(req,res)=>
{

}


module.exports={loginHelper,Validater}