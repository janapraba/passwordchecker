const express =require("express")
const router = express.Router()
const usermodel = require("../model/usermodel")

router.post("/",async(req,res)=>{
    const newuser = new usermodel(req.body);
    try{
        await newuser.save()
        res.status(200).json({
            "message" :"user was insert successfull"
        })
    } catch{
        res.status(500).json({
            "message":"user was not insert"
        })
    }
})


module.exports = router;