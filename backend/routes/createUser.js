const express = require('express')
const router    =express.Router()
const User =require('../models/user')
const {body,validationResult}=require('express-validator');

router.post("/createUser",
body("email").isEmail(),
body("name").isLength({min:5}),
body("password","incorrect password").isLength({min:5})
,async (req, res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
try{    
 await User.create({
 name: req.body.name,
 email:req.body.email,
 password:req.body.password,
 location:req.body.location
})
res.json({success:true});

}catch(err){
console.log(err);
res.json({success:false})
}
})

router.get('/test',(req,res)=>{
    res.json({success : true , message : "Server responds"})
})
module.exports=router;