exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.managerBoard = (req, res) => {
    res.status(200).send("Manager Content.");
  };
  exports.employeeBoard = (req, res) => {
    res.status(200).send("Employee Content.");
  };
  exports.productsBoard = (req, res) => {
    res.status(200).send("Products Content.");
  };