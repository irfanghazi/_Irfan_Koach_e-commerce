
const express = require("express");
require("./db/config");
const Router = require("./router/sellerRouter")


const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(Router);
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

