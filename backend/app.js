const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors())
console.log(process.env.MONGO_ATLAS_PW);


mongoose
  .connect(`mongodb+srv://reymond:${process.env.MONGO_ATLAS_PW}@cluster0.f3z39at.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", express.static(path.join(__dirname, "angular")));
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});

module.exports = app;
