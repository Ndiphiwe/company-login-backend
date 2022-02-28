module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
    image: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
    });
    return Product;
  };