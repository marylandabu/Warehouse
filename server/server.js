const express = require("express");
const warehouseController = require("./controllers/warehouseController");
const { getWarehouses } = warehouseController;
const app = express();
const port = 3001;

app.get("/warehouses", getWarehouses, (req, res) => {
  res.send(res.locals.warehouses.warehouses);
});



app.listen(port, function () {
  console.log("Server started on " + port);
});
