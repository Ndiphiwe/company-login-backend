const db = require("../models");
const config = require("../config/auth.config");
const Product = db.products;
const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
exports.addProduct = (req, res) => {
  // Save User to Database
  Product.create({
    // id: req.body.id,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  })
    .then(product => {
      if (!title || !category || !description || !price || !image){
        res.send({ message: "Please add all item details" });
      } else {
        // user role = 1
        product.then(() => {
          res.send({ message: "Product added successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};