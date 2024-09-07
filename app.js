const express= require('express')
const morgan=require('morgan')
const ContentRouter=require('./Routes/contentGenratorRouter')

const app=express();

// middelwares
app.use(express.json())
app.use(morgan('dev'))
// conrollers

//  routers

app.use('/api/v1/genrateContent',ContentRouter)

// servers

module.exports=app;