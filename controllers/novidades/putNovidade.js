const { updateNovidadeById } = require('../../DAOs/novidades');
const reorderNovidadeDisplay = require('../../helpers/reorderDisplayHome');

module.exports = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    reorderNovidadeDisplay(req.body).then(async () => {
        const updateNovidade = await updateNovidadeById(req.params.id, req.body);
    
        return res.status(updateNovidade.status).json(updateNovidade);
    })
}