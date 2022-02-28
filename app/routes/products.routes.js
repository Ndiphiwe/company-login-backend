const controller = require("../controllers/products.controller");
module.exports = function(app) {
    app.get(
      "/api/test/products",
      // [authJwt.verifyToken, authJwt.isManager],
      controller.productsBoard
      );
    };