const express=require('express')
const {getUsers}=require('../controller/dashboard')
const router=express.Router()
router.route('/users').get(getUsers)
module.exports=router