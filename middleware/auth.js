const express=require("express")
require("dotenv").config();
const jwt=require("jsonwebtoken")

const {User}=require("../models/users")
const {Admin}=require("../models/users")
exports.checkToken=async (req,res,next)=>{
  try {
   
      if(req.headers["authuser"]){
        console.log("Authent")
        
        const {_id,expiresIn}=jwt.verify(req.headers["authuser"],process.env.DB_SECRET);
        console.log(_id)
         const account=await User.findById({"_id":_id})
       
          if(account){
            res.locals.userData=await User.findById({"_id":_id})
           }
  
        next();
  
      }
     


      else{
        console.log("not found")
        console.log(req.body)
        
          next()
      }
  
  
      
  } catch (error) {
      res.status(401).send({error:"bad token"})
      console.log(error)
      
  }
  }
  
exports.Checkuser= async(req,res,next)=>{
  const user=res.locals.userData;
 
  req.user=user
  next();
}
  