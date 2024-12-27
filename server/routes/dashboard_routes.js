const express=require('express')
const {getUsers, UpdateUser,DeleteUser}=require('../controller/dashboard')

const router=express.Router()
router.route('/users').get(getUsers).patch(UpdateUser).delete(DeleteUser)
router.route('/users/:email').delete(DeleteUser)
module.exports=router