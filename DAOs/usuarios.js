const database = require('../models');

module.exports.getOneById = async (id) => {
    try {
        const usuario = await database.Usuarios.findOne({
            where: { 
                active: true, 
                id: id
            }
        });
        
        if(!usuario) {
            console.log({ status: 404, msg: 'Usuario não encontrado', scope: 'DAO - Usuarios - getOne'})
            return { status: 404, msg: 'Usuario não encontrado', scope: 'DAO - Usuarios - getOne'}
        }

        console.log({ status: 200, scope: 'DAO - Usuarios - getOne'})
        return { status: 200, usuario }

    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - Usuarios - getOne'})
        return { status: 500, msg: error }
    }
}

module.exports.getOneByEmail = async (email) => {
    try {
        const usuario = await database.Usuarios.findOne({
            where: { 
                active: true, 
                email: email
            }
        });
        
        if(!usuario) {
            console.log({ status: 404, msg: 'Usuario não encontrado', scope: 'DAO - Usuarios - getOne'})
            return { status: 404, msg: 'Usuario não encontrado', scope: 'DAO - Usuarios - getOne'}
        }

        console.log({ status: 200, scope: 'DAO - Usuarios - getOne'})
        return { status: 200, usuario }

    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - Usuarios - getOne'})
        return { status: 500, msg: error }
    }
}

module.exports.createUsuario = async (usuarioInfo) => {
    try {
        const usuario = await database.Usuarios.create(usuarioInfo);
        
        console.log({ status: 201, scope: 'DAO - Usuarios - createUsuarios'})
        return { status: 201, usuario }
    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - Usuarios - createUsuarios'})
        return { status: 500, msg: error }
    }
}

module.exports.updateUsuarioById = async (id, newObj) => {
    try {
        await database.Usuarios.findOne({
            where: { id }
        });

        try {
            await database.Usuarios.update(
                newObj,
                { where: { id } }
            );

            console.log({ status: 200, msg: 'Usuario atualizado', scope: 'DAO - Usuarios - updateUsuariosById' })
            return { status: 200, msg: 'Usuario atualizado' }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - Usuarios - updateUsuariosById'})
            return { status: 500, msg: error }

        }
    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - Usuarios - updateUsuariosById'})
        return { status: 404, msg: error }

    }
}

module.exports.deleteUsuarioById = async (id) => {
    try {
        await database.Usuarios.findOne({
            where: { id }
        });

        try {
            await database.Usuarios.update(
                { active: false },
                { where: { id } }
            )

            console.log({ status: 200, msg: 'Usuário apagado.', scope: 'DAO - Usuarios - deleteUsuariosById' })
            return { status: 200, msg: 'Usuário apagado.'}

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - Usuarios - deleteUsuariosById'})
            return { status: 500, msg: error }
        }

    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - Usuarios - deleteUsuariosById'})
        return { status: 404, msg: error }
    }
}