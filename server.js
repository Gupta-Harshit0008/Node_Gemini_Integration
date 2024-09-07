const app=require('./app')
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})

port=process.env.PORT

app.listen(port,()=>{
    console.log(`Server is started at port ${port}` )
})