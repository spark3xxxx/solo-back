const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  distributor: String,
  price: String,
  evaluation: String,
  material: String,
  nutrition: String,
  description: String,
  category: String,
  url: String,
  img: {
    type: String,
  },
  img2: {
    type: String,
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("マイナス");
    },
  },
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
