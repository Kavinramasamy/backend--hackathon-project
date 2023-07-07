import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    imageurl:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true

    },
    price:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
    })

    const CustomerSchema= new mongoose.Schema({

        email:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        mobilenumber:{
            type:Number,
            required:true
        },
        productname:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        },
        fromdate:{
            type:String,
            required:true
        },
        todate:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        }
 })



    
    


    export const ProductModel = mongoose.model("products",ProductsSchema)
    export const CustomerModel = mongoose.model("customer",CustomerSchema)