const express= require('express')
const morgan=require('morgan')
const { GoogleGenerativeAI } = require("@google/generative-ai");

const dotenv=require('dotenv')
const fs = require("fs");

dotenv.config({path:'./config.env'})
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const app=express();
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// middelwares
app.use(express.json())
app.use(morgan('dev'))
// conrollers




const run= async(prompt) => {
    try{
        const result = await model.generateContent([prompt]);
        // console.log(result.response.text());
        return result.response.text()
    }
catch(err){
    console.log(err)
}
}

app.get('/api/v1/genrateContent',async (req,res)=>{
    try{
     const data= req.body.question;
     const result=await run(data)
     console.log(result)
     res.send({
         res:result
     })
    }
    catch(err){
     res.status(400).json({
         err
     })
    }
 })

// servers
app.listen(1234,()=>{
    console.log('Server is started at port 1234')
})