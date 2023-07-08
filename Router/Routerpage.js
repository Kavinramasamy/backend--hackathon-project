import express from 'express';
import { CustomerModel, ProductModel } from '../Helper/mongoosevalidator.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.get('/',(req,res)=>res.send("Im working"))
router.get('/node',async(req,res)=>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }
    })
    //Message for mail
    let message = {
        from: process.env.USER,
        to: 'kavinramasamymech@gmail.com',
        subject: "Food token generator ",  
        html: "<p>Click to activate your account</P>", 

    }
    let sendMail = await transporter.sendMail(message);
    res.status(200).json({message:"Check your mail for activation link"});
})

router.get('/productslist', async (req, res) => {
    try {
        
        const products = await ProductModel.find();
        if (products) {
            return res.status(200).json({ message: "product arrived.....", products })
        }
        res.status(400).json({ message: "product not arrived" })

    }
    catch (err) {
        console.log("error", err);
    }
})

router.post('/addproduct', async(req, res) => {
    const Addproduct = 
     await ProductModel(
        {
        imageurl: (req.body.imageurl),
        productname: (req.body.productname),
        price: (req.body.price),
        quantity: (req.body.quantity)
    }).save();

    res.status(200).json({ message: "product added.....", Addproduct })

})

router.post('/Buyproduct', async (req, res) => {
    try {
        const Buyproducts = await CustomerModel( {
            email: (req.body.email),
            address: (req.body.address),
            mobilenumber: (req.body.mobilenumber),
            productname: (req.body.productname),
            quantity: (req.body.quantity),
            fromdate: (req.body.fromdate),
            todate: (req.body.todate),
            price: (req.body.price)

        }).save()
        res.status(200).json({ message: "successfully product buyed......", Buyproducts })
    }
    catch (err) {
        console.log("not saved", err);
    }
})

router.get('/customer', async (req, res) => {
    try {
        const customers = await CustomerModel.find();
        if (customers) {
            return res.status(200).json({ message: "success", CustomerModel })
        }
        res.status(400).json({ message: "failed" })

    }
    catch (err) {
        console.log("error", err);
    }
})

router.put('/editproduct', async (req, res) => {
    const editproduct = await ProductModel.updateOne(
        { productname: req.body.productname },
        { $set: { "price": req.body.price } }
    )
    res.status(200).json({ message: "product updated successfully....", editproduct })
})

router.delete('/deleteproduct', async (req, res) => {
    const deleteproduct = await ProductModel.deleteOne({ price: req.body.price })

    res.status(200).json({ message: "product deleted sucessfully.....", deleteproduct })
})

const Routerpage = router;

export { Routerpage }