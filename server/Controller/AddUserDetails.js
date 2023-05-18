const { default: mongoose } = require("mongoose");
const { UserData } = require("../Model/UserModel");
const path = require("path");
var fs = require('fs');

const AddUserdetails = async (req, res) => {

  if(req.file)
  {
    const User=UserData.findOne({email:req.LoggeDInUser.email}).then(data=>
      {
          const imagePath = path.join(__dirname, '../public/images/')
  if(data.dp)
  {
    fs.unlink(imagePath + data.dp,async (err) => {
      if (err) {
          throw err;
      }
  
      console.log("Delete File successfully.");

  

    });
  }
       
         UserData.updateOne(
              { email:req.LoggeDInUser.email},
              {
                name: req.body.email,
                Address: req.body.Address,
                dp: req.file.filename,
                validation:true
              }
            ).then(data=>
              {
                 res.status(200).json(true)
              })


      })

    

  }
  else
  {
    await UserData.updateOne(
      { email:req.LoggeDInUser.email},
      {
        name: req.body.email,
        Address: req.body.Address,
     
        validation:true
      }
    ).then(data=>
      {
      
         res.status(200).json(true)
      })
  }
 
};
const validateduser = (req, res) => {
  const user = req.LoggeDInUser;
UserData.findOne({email:req.LoggeDInUser.email}).then(data=>
  {
    console.log(data);
    res.json(data);

  })


};
module.exports = { AddUserdetails, validateduser };
