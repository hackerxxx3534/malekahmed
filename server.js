const express = require("express");
const mongoose = require("mongoose");

const artifactRoutes = require("./routes/artifactRoutes");

const app = express();

app.use(express.json());


app.use("/api/artifacts", artifactRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/museum")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});