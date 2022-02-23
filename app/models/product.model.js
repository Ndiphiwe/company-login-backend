module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
    price: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.BLOB
    }
    });
    return Product;
  };