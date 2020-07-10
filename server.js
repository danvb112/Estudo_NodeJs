const express = require('express');
const mongoose = require('mongoose');

//iniciando o app
const app = express();

//conectando com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});


//primeira rota
app.get('/', (req, res) => {
    res.send("Hello Daniel");
})

app.listen(3001);

