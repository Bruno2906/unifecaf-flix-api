const connection = require('../database/connection');

const getAllFilmes = async () => {
    const [filmes] = await connection.execute(
        'SELECT * FROM tbl_filmes'
    );

    return filmes;
};

const getFilmeById = async (id) => {
    const [filme] = await connection.execute(
        'SELECT * FROM tbl_filmes WHERE id = ?',
        [id]
    );

    return filme;
};

const getFilmesByNome = async (nome) => {
    const [filmes] = await connection.execute(
        `SELECT * FROM tbl_filmes 
         WHERE nome LIKE ? OR sinopse LIKE ?`,
        [`%${nome}%`, `%${nome}%`]
    );

    return filmes;
};

module.exports = {
    getAllFilmes,
    getFilmeById,
    getFilmesByNome
};