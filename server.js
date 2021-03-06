const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
const { json } = require('express');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//conectando com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir("./src/models")


//Rotas
app.use('/api', require("./src/routes"))

app.listen(3001);

