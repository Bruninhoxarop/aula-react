const express = require('express');
const app = express();
const cadastros = [];

app.use(require("cors")());
app.use(express.json());

app.get('/', (req, res, next) => {
    res.json(cadastros);
})

app.post('/cadastro', (req, res, next) => {
    console.log("Cadastro recebido!");
    //salvo no banco de dados
    cadastros.push({
        nome: req.body.txtnome,
        idade: parseInt(req.body.txtIdade),
        uf: req.body.cmbUF
    });
    res.json({message: "tudo ok por aqui!", dados: cadastros});
})

app.listen(3001, () => console.log("servidor rodando na porta 3001"));