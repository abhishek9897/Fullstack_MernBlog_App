const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoute = require("./routes/blog");
const authRoute = require("./routes/auth");

const app = express();

//connect cloud database
const connectDB = process.env.DATABASE;
mongoose
  .connect("mongodb+srv://chaudharyabhi941:uvQfvvbF4qmW7Jue@cluster0.t5issad.mongodb.net/blogs?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("connect success"))
  .catch(() => console.log("connect error"));

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api", blogRoute);
app.use("/api", authRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`start server in port ${port}`);
});
