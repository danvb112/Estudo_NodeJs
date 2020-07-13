const express = require('express');
const routes = express.Router();

const productController = require("./controller/productController")

routes.get('/products', productController.index);

module.exports = routes;