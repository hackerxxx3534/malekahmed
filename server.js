const express = require("express");
const app = express();

const artifactRoutes = require("./routes/artifacts");

app.use(express.json());

// Routes
app.use("/artifacts", artifactRoutes);

app.listen(3000, () => {
  console.log("Museum API running on port 3000");
});