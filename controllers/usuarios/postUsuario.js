const { createUsuario } = require('../../DAOs/usuarios');

module.exports = async (req, res) => {
    const { nome, email, departamento, password, admin, active } = await req.body

    if( !nome || !email || !password || !departamento || admin === undefined || active === undefined) {
        return res.status(400).json({ msg: 'Bad request '});
    } else {
        const isCreated = await createUsuario(req.body);
        return res.status(isCreated.status).json(isCreated);
    }
}