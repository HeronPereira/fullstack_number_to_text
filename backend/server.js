const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const intTotext = require('./intTotext');

app.use(cors());

app.use(express.json());



app.get('/:value', (req,res)=>{
    const receivedValue = parseInt(req.params.value);
    
    console.log(receivedValue);
    if(!isNaN(receivedValue))
        {
            const texvalue = intTotext.numeroParaTexto(receivedValue);
            res.json({"extenso":texvalue});
        }
        else
        {
            res.status(400).json({error : 'Valor inválido na URL. '})
        }

})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
})