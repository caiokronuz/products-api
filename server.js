const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json()); //Permite que seja enviado dados em formato de JSON para a aplicação
app.use(cors());

//Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true,    
    useUnifiedTopology: true});

requireDir('./src/models');

//Toda vez que alguem requisitar o diretorio /api,
//será destinado para o routes.
app.use('/api', require('./src/routes'))

app.listen(3001);