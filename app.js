const express = require('express');
const cors = require('cors');

const filmeRoutes = require('./src/routes/filmeRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/v1/controle-filmes', filmeRoutes);

app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API UniFECAF Flix funcionando!'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});