const sendMail = require('../../helpers/mailer');

module.exports = async (req, res) => {
    const isMailSent = await sendMail(JSON.stringify(req.body), req.params.formulario);
    if (isMailSent !== true) return res.status(500).json({ msg: 'Email não enviado.', erro: isMailSent })
    if (isMailSent) return res.status(200).json({ msg: `Email enviado.` })
}