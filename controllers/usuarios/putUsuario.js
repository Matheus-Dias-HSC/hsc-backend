const { updateUsuarioById } = require('../../DAOs/usuarios');

module.exports = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    const update = await updateUsuarioById(req.params.id, req.body);

    return res.status(update.status).json(update);
}