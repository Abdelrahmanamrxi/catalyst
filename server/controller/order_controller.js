
require('dotenv').config()
const {createError}=require('./errors')
const {Order}=require('../model/model')
const Checkout=async(req,res,next)=>{
    try {
        const { email, phone, address, payment_type, payment, state, apartment, country, Total_Price, items, userId, first_name, last_name } = req.body;
        const { card_number, expiration_date, security_code } = payment;
      if(!email&&!address&&!state&&!payment_type&&!phone){
        return next(createError('Please fill in the whole required fields.'))
      }
        // Validation checks
        if (!email) {
            return next(createError('Please provide your email credentials.'), 422);
        }
        if (!address || !state) {
            return next(createError('Please provide your address or governorate you currently settle in.'), 422);
        }
        if (!payment_type) {
            return next(createError("Choose a Payment Type"), 422);
        }
        if (!phone) {
            return next(createError("Provide your contact information."), 422);
        }
        if (payment_type === "credit" && (!card_number || !expiration_date || !security_code)) {
            return next(createError('Please provide Payment Information'), 422);
        }
    
        
        const newOrder = await new Order({
            userId,
            first_name,
            last_name,
            email,
            phone,
            address,
            state,
            apartment,
            country,
            Total_Price,
            items: items.map((item) => {
                return {
                    productId: item.productId, // Ensure this matches your schema
                    quantity: item.quantity,
                    price: item.price
                };
            }),
            payment: payment_type === "credit" ? {
                payment_type,
                card_number,
                security_code,
                expiration_date
            } : payment_type,
        });
    
      
        const savedOrder = await newOrder.save();
        res.status(201).json({ message: "Your order has been created successfully.", savedOrder });
    } catch (err) {
        
        return next(createError('An unexpected error happened'), 500);
    }
}
module.exports={Checkout}