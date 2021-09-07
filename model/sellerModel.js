const mongoose = require("mongoose");
const sellerSchema = new mongoose.Schema(
    {
      seller: {
        type: String,
        required: true,
      },
      sellerAddress: {
        type: String,
        required: true,
      },
      discription: {
        type: String,
        required: true,
      },
      color: {
          type:String,
          required:true,
      },
      rating: {
          type: Number,
          required:true,
      },
      price: {
        type:Number,
        required:true,
      }
    },
     
  );
  const Seller = new mongoose.model("Seller", sellerSchema);

module.exports = Seller;

