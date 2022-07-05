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
  const { idOrName } = req.params;
  try {
    const {
      _id,
      name,
      category,
      url,
      evaluation,
      distributor,
      price,
      img,
      material,
      nutrition,
      description,
    } = req.body;

    // foodModel.findById(idOrName).then((product) => {
    //   product.name = name;
    //   product.category = category;
    //   product.url = url;
    //   product.evaluation = evaluation;
    //   product.disdributor = distributor;
    //   product.price = price;
    //   product.img = img;
    //   product.material = material;
    //   product.nutrition = nutrition;
    //   product.description = description;
    //   return product.save();
    // });

    // const { idOrName } = req.params;
    // const { id, name, distributor, img } = req.body;

    await foodModel.updateOne(
      { _id: idOrName },
      {
        $set: {
          _id: _id,
          name: name,
          category: category,
          url: url,
          evaluation: evaluation,
          distributor: distributor,
          price,
          price,
          img: img,
          material: material,
          nutrition: nutrition,
          description: description,
        },
      }
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
