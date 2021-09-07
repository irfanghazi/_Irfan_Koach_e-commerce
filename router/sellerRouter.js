const express = require("express");

const User = require("../model/sellerModel");


const router = express.Router();

// creating seller
router.post("/insertSeller", async (req, res) => {
  try {
    const { seller, sellerAddress, discription, color, rating,price } =
      req.body;
    
    const newSeller = new User({
      seller,
      sellerAddress,
      discription,
      color,
      rating,
      price,
    });
    const register = await newSeller.save();
    res.json({ message: "seller added suceesfully", register });
  } catch (error) {
    res.json({ error });
  }
});

// Getting all seller details

router.get("/usersDetails",async(req, res) =>{
try {
    const sellerData = await User.find();
    res.send(sellerData)
    
} catch (error) {
    res.json({error})
    
}
})

// Getting individual seller details

router.get("/userDetails/:id", async(req, res) =>{
    try {
        const _id = req.params.id
        const sellerData = await User.findById(_id)
        res.send(sellerData)
    } catch (error) {
        res.json({error})
        
    }
})

// Update seller by id

router.patch("/updateSeller/:id", async(req, res) =>{
    try {
        const _id = req.params.id
        const sellerData = await User.findByIdAndUpdate(_id,req.body, {new:true})
        res.send(sellerData)
    } catch (error) {
        res.json("error")
        
    }
})

// update whole seller data

router.put("/updateSeller/:id", async(req,res) =>{
    try {
        const _id =  req.params.id
        const sellerData = await User.findOneAndUpdate(_id,{
            seller:req.body.seller,
            sellerAddress:req.body.sellerAddress,
            discription:req.body.discription,
            color:req.body.color,
            rating:req.body.rating,
            price:req.body.price,
            },{new:true})

            res.send(sellerData)

        
    } catch (error) {
        
        res.json({error})
    }
})

// Delete seller data
router.delete("/deleteSeller/:id", async(req,res)=>{
    try {
        const _id = req.params.id
    const sellerData = await User.findByIdAndDelete(_id)
    res.send(sellerData)
    } catch (error) {
        res.json({error})
        
    }
    
})


module.exports = router