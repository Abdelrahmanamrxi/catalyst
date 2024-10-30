const express=require('express')
const router=express.Router()
const AuthUser=require('../controller/auth')
const {AddToCart,DeleteItem, UpdateCart}=require('../controller/cart_controller')
router.route('/add').post(AuthUser,AddToCart)
router.route('/delete').put(AuthUser,DeleteItem)
router.route('/update').put(AuthUser,UpdateCart)


module.exports=router