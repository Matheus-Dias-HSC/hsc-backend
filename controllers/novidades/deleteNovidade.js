const { deleteNovidadeById } = require('../../DAOs/novidades');

module.exports = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    const deletedNovidade = await deleteNovidadeById(req.params.id);

    return res.status(deletedNovidade.status).json(deletedNovidade);
}