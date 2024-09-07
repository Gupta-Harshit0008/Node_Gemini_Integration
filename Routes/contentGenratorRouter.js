const express=require('express')
const contentGenration=require('../controllers/contentGenrationController')


const ContentRouter=express.Router();
ContentRouter.route('/').get(contentGenration.contentGenrator)

module.exports=ContentRouter