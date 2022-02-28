const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const { user } = require("./app/models");
const Role = db.role;
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
function initial() {
 
  Role.create({
    id: user.id,
    name: "user"
  });
 
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Node application all set up" });
});
// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/products.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8063;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});