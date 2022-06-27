const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // application/json
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// const feedRoutes = require("./routes/feed");
// const mongoConnect = require("./util/database").mongoConnect;

const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

mongoose
  .connect(
    "mongodb+srv://spark3xxx:p2lduhsq@cluster0.2sawy.mongodb.net/food?retryWrites=true&w=majority"
  )
  .then(() => console.log("データ接続成功"))
  .catch((err) => console.log(err));

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// app.use("/feed", feedRoutes);

app.listen(8000, () => {
  console.log("8000");
});
// mongoConnect((client) => {

// });
