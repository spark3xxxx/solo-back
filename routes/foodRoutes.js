const express = require("express");
const app = express();
const foodModel = require("../models/Food");
app.use(express.json());
// const { postFood } = require("../constrollers/food");
const foodController = require("../controllers/food");

// app.get("/foods", async (req, res) => {
//   const foods = await foodModel.find({});

//   try {
//     res.send(foods);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.post("/food", async (req, res) => {
//   const food = new foodModel(req.body);

//   try {
//     await food.save();
//     res.send(food);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.get("/foods", foodController.getFoods);

app.get("/food/:idOrName", foodController.getFood);

app.patch("/food/:idOrName", foodController.patchFood);

app.delete("/food/:idOrName", foodController.deleteFood);

app.post("/food", foodController.postFood);

module.exports = app;
