const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    title:{type:String,required:[true,'please enter product title']},
    description:{type:String,required:[true,'please enter product description']},
    category:{type:String,required:[true,'please enter product category']},
    price:{type:Number,required:[true,'please enter product price']},
    image:{type:String,required:[true,'please enter product image']},
    brand:{type:String,required:[true,'please enter product brand']},
    stocks:{type:Number,required:[true,'please enter product available stocks']},
    rating:{type:Number,required:[true,'please enter product ratings']}
},{
    timestamps:true
});

module.exports=new mongoose.model("Product",ProductSchema);