const path = require("path");
const { UserData } = require("../Model/UserModel");
var fs = require('fs');
const deleteuser=async (req,res)=>
{



const User=UserData.findOne({email:req.LoggeDInUser.email}).then(data=>
    {
        const imagePath = path.join(__dirname, '../public/images/')

        fs.unlink(imagePath + data.dp, (err) => {
            if (err) {
                throw err;
            }
        
            console.log("Delete File successfully.");
        });
    })


await UserData.deleteOne({email:req.LoggeDInUser.email}).then(data=>
    {
        res.status(200).json(true)
    })

}
module.exports={deleteuser}