const { deleteUsuarioById } = require('../../DAOs/usuarios');

module.exports = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    const deleteUsuario = await deleteUsuarioById(req.params.id);

    return res.status(deleteUsuario.status).json(deleteUsuario);
}