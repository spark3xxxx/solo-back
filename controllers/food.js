const foodModel = require("../models/Food");

exports.getFoods = async (req, res) => {
  const foods = await foodModel.find({});

  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getFood = async (req, res) => {
  const { idOrName } = req.params;
  const food = await foodModel.find({ name: idOrName });

  try {
    res.send(food);
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

exports.patchFood = async (req, res) => {
  try {
    const { idOrName } = req.params;
    console.log(req.body);
    console.log(idOrName);
    const { id, name, distributor, img } = req.body;
    await foodModel.updateOne(
      { name: idOrName },
      { $set: { distributor: distributor } }
    );
    const afterFood = await foodModel.find({ name: name });
    res.send(afterFood);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteFood = async (req, res) => {
  try {
    const { idOrName } = req.params;
    await foodModel.remove({ name: idOrName });
    res.send("delete success");
  } catch (err) {
    res.status(500).send(err);
  }
};
