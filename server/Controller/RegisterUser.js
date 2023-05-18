const { UserData } = require("../Model/UserModel");
const bcrypt = require('bcrypt');

const RegisterUser=async (req,res)=>
{
  await UserData.findOne({email:req.body.email}). then (    async data=>
    {
     if (data)
        {
            console.log('exist');
            res.status(401).json(false)
        }
        else{

          
            const HashedPassword=await bcrypt.hash(req.body.password,10)


       
            UserData({
                email:req.body.email,
username:req.body.username,
password:HashedPassword
            }).save()

res.status(200).json(true)
        }
    }).catch(err=>
        {
            console.log(err);
        })
}



module.exports={RegisterUser}