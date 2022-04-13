const { getOneById } = require('../../DAOs/usuarios');

module.exports = async (req, res) => {
    const usuario = await getOneById(req.params.id);

    if(usuario.status !== 200) return res.status(400).json(usuario)
    if(usuario.status === 200) return res.status(usuario.status).json(usuario.usuario);
}