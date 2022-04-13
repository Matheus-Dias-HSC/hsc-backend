const { getOneByEmail } = require('../../DAOs/usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const hash = process.env.SECRET_HASH;

module.exports.auth = async (req, res) => {
    const generateToken = (params = {}) => {
        return jwt.sign(params, hash, {
            expiresIn: 86400 //24h
        })
    }

    if (req.body) {
        if(!req.body.email || !req.body.password) return res.status(400).json({ msg: 'Bad Request.' })

        const { status, usuario, msg, scope } = await getOneByEmail(req.body.email)
            
        if(status !== 200) return res.status(status).json({ status, msg: "Acesso não autorizado" })

        bcrypt.compare(req.body.password, usuario.dataValues.password)
            .then((isPasswordCorrect) => {
                if(isPasswordCorrect) {
                    return res.status(200).json({
                        id: usuario.id,
                        nome: usuario.nome, 
                        email: usuario.email,
                        admin: usuario.admin,
                        departamento: usuario.departamento,
                        token: generateToken({ 
                            id: usuario.id, 
                            admin: usuario.admin, 
                            nome: usuario.nome, 
                            email: usuario.email,
                            departamento: usuario.departamento
                        })
                    })
                } else {
                    return res.status(403).json({ msg: 'Invalid login' })
                }
        });
    } else {
        return res.status(400).json({ msg: 'Bad Request.' })
    }
}

module.exports.verify = async (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (!token) return res.status(401).json({ msg: 'Unauthorized' })

    await jwt.verify(token, hash, (err, decoded) => {
        if(!err) {
            return res.status(200).json({ success: true, msg: 'Valid Token' })
        } else {
            return res.status(403).json({ success: false, msg: 'Invalid Token' })
        }
    })
}