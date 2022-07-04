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

app.get("/foods/:idOrName", foodController.getFood);

app.patch("/foods/:idOrName", foodController.patchFood);

app.delete("/foods/:idOrName", foodController.deleteFood);

app.post("/foods", foodController.postFood);

module.exports = app;
