var express = require('express');
const { RegisterUser } = require('../Controller/RegisterUser');
const { loginHelper } = require('../Controller/Login');
const { imagesUpload } = require('../Controller/MulterControl');
const { AddUserdetails, validateduser } = require('../Controller/AddUserDetails');
const JWTvarify = require('../Controller/ValidateUser');
const { deleteuser } = require('../Controller/DeleteUser');
var router = express.Router();
/* GET home page. */
router.post('/userregister',RegisterUser);
router.post('/loginuser',loginHelper);
router.patch('/adddetails',JWTvarify,imagesUpload,AddUserdetails);
router.get('/getuser',JWTvarify,validateduser);
router.delete('/deleteuser',JWTvarify,deleteuser);


module.exports = router;
