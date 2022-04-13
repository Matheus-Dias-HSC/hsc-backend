const router = require('express').Router()

//Handlers
const mailerHandler = require('./mailer/mailerHandler');
const novidadesHandler = require('./novidades/novidadesHandler');
const userHandler = require('./usuarios/usuariosHandler');
const authHandler = require('./auth/authHandler');
const uploadHandler = require('./upload/uploadHandler');

// Home Endpoint
router.use('/api/send-mail', mailerHandler);
router.use('/api/novidades', novidadesHandler);
router.use('/api/user', userHandler);
router.use('/api/auth', authHandler);
router.use('/api/upload', uploadHandler);
router.use('/api/', (_, res) => res.status(200).json({ msg: 'HSC Backend - API' }));

module.exports = router