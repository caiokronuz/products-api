const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index); //O método GET deve ser usado sempre que quisermos requisitar algo do server.
routes.get("/products/:id", ProductController.show) 
routes.post("/products", ProductController.store); //O método POST deve ser usado sempre que quisermos criar algo no server.
routes.put("/products/:id", ProductController.update); //O método PUT deve ser usado quando queremos atualizar algo no servidor
routes.delete("/products/:id", ProductController.destroy); //O método DELETE deve ser usado quando queremos remover algo do server

module.exports = routes;