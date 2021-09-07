const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });