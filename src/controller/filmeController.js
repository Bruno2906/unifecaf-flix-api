const filmeModel = require('../model/filmeModel');

const listarFilmes = async (req, res) => {
    try {
        const filmes = await filmeModel.getAllFilmes();

        return res.status(200).json({
            quantidade: filmes.length,
            filmes
        });
    } catch (error) {
        return res.status(500).json({
            erro: error.message
        });
    }
};

const buscarFilmePorId = async (req, res) => {
    try {
        const { id } = req.params;

        const filme = await filmeModel.getFilmeById(id);

        if (filme.length === 0) {
            return res.status(404).json({
                mensagem: 'Filme não encontrado'
            });
        }

        return res.status(200).json(filme[0]);
    } catch (error) {
        return res.status(500).json({
            erro: error.message
        });
    }
};

const filtrarFilmes = async (req, res) => {
    try {
        const { nome } = req.query;

        const filmes = await filmeModel.getFilmesByNome(nome);

        return res.status(200).json({
            quantidade: filmes.length,
            filmes
        });
    } catch (error) {
        return res.status(500).json({
            erro: error.message
        });
    }
};

module.exports = {
    listarFilmes,
    buscarFilmePorId,
    filtrarFilmes
};