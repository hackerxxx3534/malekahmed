const express = require("express");
const app = express();

const testRoutes = require("./routes/testRoutes");
const notFound = require("./middleware/notFound");
const globalErrorHandler = require("./middleware/errorMiddleware");

app.use(express.json());


app.use("/api", testRoutes);

app.all(/.*/, notFound);


app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("Error Handling API running on port 3000");
});