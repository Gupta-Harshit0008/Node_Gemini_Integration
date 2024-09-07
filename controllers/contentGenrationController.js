const Modal=require('../utils/ModalUtil')
exports.contentGenrator=async (req,res)=>{
    try{
     const data= req.body.question;
     const result=await Modal.run(data)
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
 }