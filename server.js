const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    "mongodb://sana:sanaloveu@cluster0-shard-00-00-g0lyb.mongodb.net:27017,cluster0-shard-00-01-g0lyb.mongodb.net:27017,cluster0-shard-00-02-g0lyb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
  )
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err));

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is started on port ${port}`));
