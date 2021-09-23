const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://karaecom:karaecom@clusterecom.xfnkr.mongodb.net/ClusterEcom?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("running 5000");
});
