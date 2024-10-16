const mongoose=require('mongoose')
const product=mongoose.Schema({
    id:String,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:String,
        count:Number
    }
    ,discount:String
})
const user=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        minlength:7
    },
    passwordUpdatedCount:{
        type:Number,
        default:0,
        max:3
    }
    ,updatedAt: { type: Date } 
})
const cart=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    items:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true

        }
    ,quantity:{
        required:true,
        type:Number,
        min:1,
        max:5
    },
    price:{
        type:Number,
        required:true
    }
}],
    TimeOfPurchase:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:["active","pending","purchased"],
        default:"active"


    }
   
})

user.pre('save',function(next){
    if(this.isModified('password')){
        this.updatedAt=Date.now();
    }
    next()
})
const Product=mongoose.model('Product',product)
const User=mongoose.model('User',user)
module.exports={Product,User}