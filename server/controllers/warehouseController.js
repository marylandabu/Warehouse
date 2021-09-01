const fs = require("fs");
var bodyParser = require('body-parser');
const express = require("express");
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const warehouseController = {};

warehouseController.getWarehouses = (req, res, next) => {
  fs.readFile("warehouse.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.error(
        "error in getWarehouses controller- cannot find file ",
        err
      );
      return next({
        message: {
          log: "error finding file in getWarehouses controller  ",
          err,
        },
      });
    } else {
      try {
        const data = JSON.parse(jsonString);
        res.locals.warehouses = data;
        //console.log(res.locals.warehouses);
        return next();
      } catch (err) {
        console.error("error parsing in getWarehouses controller");
        return next({
          message: { log: "error parsing in getWarehouses controller ", err },
        });
      }
    }
  });
};



module.exports = warehouseController;
