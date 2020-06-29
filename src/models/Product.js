//Importa o MONGOOSE
const mongoose = require('mongoose');

//Importa o Mongoose-Paginate
const mongoosePaginate = require("mongoose-paginate");

//Cria uma tabela/schema
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

ProductSchema.plugin(mongoosePaginate);

//Fala pro mongoose que toda vez que eu me referenciar a 'PRODUCT' eu vou estar falando sobre esse schema
mongoose.model('Product', ProductSchema);