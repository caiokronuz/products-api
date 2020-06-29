const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query; //utilizando o req.query estamos pegando o parametro page, que esta no método GET.
        const products = await Product.paginate({},{page , limit: 10});
        return res.json(products);
    },

    async show(req, res){
        const products = await Product.findById(req.params.id);
        /*
        req.params.id = capta o id passado na URL, definido nas rotas
        "product/:id".
        */
        return res.json(products);
    },

    async store(req, res){
        //Rota de criaçao
        const product = await Product.create(req.body);
        /*
        O REQ contem todos os dados da requisiçao, entao iremos passar o req.body para 
        passar todo corpo da requisiçao {title, description, url, createdAt}.
        */
        return res.json(product);
    },

    async update(req, res){
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        /*
        req.params.id = Capta o id passado na url, e o req.body passa a requisição que foi passada
        (O que vai ser mudado na tabela!)
        new: true = Faz o retorno ser o novo produto(atualizado), não o antigo!
        */
        return res.json(products);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        /*
        Capta o ID e remove o produto.
        */
        return res.send();
    }


}