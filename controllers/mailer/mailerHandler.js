const router = require('express').Router();

const sendMail = require('./sendMail');

router.post('/:formulario', sendMail);

module.exports = router