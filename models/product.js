const mongoConnect = require("../util/database");
const getDb = require("../util/database").getDb;

class Product {
  constructor(title, image) {
    this.title = title;
    this.image = image;
  }

  save() {
    const db = getDb;
    db.collection("products")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
}
