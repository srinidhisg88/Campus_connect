const question=require('../models/questions')
const user=require('../models/userModel')
const express=require('express')

const routes=express.Router();
//index route
routes.get('/',async (req,res)=>{
    result= await question.find()
   
    res.status(200).send(result)
})


//new route add a new question
routes.post('/postQn',async (req,res)=>{
    const result=new question(req.body)
    result.save()
    res.status(200).send('Question added successfully')
})
// delete question
routes.delete('/delete/:id',async (req,res)=>{
    let {id}=req.params
    await question.findByIdAndDelete(id)
    res.status(200).send('Question deleted successfully')
    
})
module.exports=routes
