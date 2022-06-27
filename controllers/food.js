const foodModel = require("../models/Food");

exports.getFoods = async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.postFood = async (req, res) => {
  const food = new foodModel(req.body);

  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
};
