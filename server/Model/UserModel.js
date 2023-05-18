const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    email:String,
  username: String,
  name: String,
  Address: String,
  dp: String,
  password: String,
  validation:{type:Boolean,default:false}
});
const UserData=mongoose.model('UserData',UserSchema)
module.exports={UserData}

