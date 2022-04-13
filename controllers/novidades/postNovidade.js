const { createNovidade, reactivateNovidadeById, removeOrderDisplayById, restoreOrderDisplayById, getOneById } = require('../../DAOs/novidades');
const reorderNovidadeDisplay = require('../../helpers/reorderDisplayHome');

module.exports = async (req, res) => {
    if(!req.body || !req.body.novidade_type) return res.status(400).json({ msg: 'Bad request '});
    if(req.body.novidade_type === "banner-redirect" && !req.body.link) return res.status(400).json({ msg: 'Bad request '});
    if(req.body.novidade_type === "banner") {
        if(!req.body.title_text || 
           !req.body.image ||
           !req.body.author ||
           !req.body.author_depto) return res.status(400).json({ msg: 'Bad request '});
    } 
    if(req.body.novidade_type === "blog" || req.body.novidade_type === "imprensa") {
        if(!req.body.title_text || 
           !req.body.title ||
           !req.body.image ||
           !req.body.author ||
           !req.body.author_depto ||
           !req.body.original_text) return res.status(400).json({ msg: 'Bad request '});
    }
    
    reorderNovidadeDisplay(req.body, false).then(async () => {
        const isCreated = await createNovidade(req.body);
    
        return res.status(isCreated.status).json(isCreated);
    })
}

module.exports.reactivate = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    const reactivatedNovidade = await reactivateNovidadeById(req.params.id);

    return res.status(reactivatedNovidade.status).json(reactivatedNovidade);
}

module.exports.restoreOrderDisplay = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });
    
    const { novidade } = await getOneById(req.params.id);
    const novidadeToRestoreDisplay = {...novidade, display_home_order: 1}
    
    reorderNovidadeDisplay(novidadeToRestoreDisplay, false).then(async () => {
        const restoredOrderDisplay = await restoreOrderDisplayById(req.params.id);
        return res.status(restoredOrderDisplay.status).json(restoredOrderDisplay);
    })
}

module.exports.removeOrderDisplay = async (req, res) => {
    if(isNaN(req.params.id)) return res.status(400).json({ status: 400, msg: 'Bad Request' });

    const removedOrderDisplay = await removeOrderDisplayById(req.params.id);

    return res.status(removedOrderDisplay.status).json(removedOrderDisplay);
}