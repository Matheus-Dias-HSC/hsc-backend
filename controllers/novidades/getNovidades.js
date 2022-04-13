const { getAll, getAllActive, getOneByTitle, getOneById, getCarousel } = require('../../DAOs/novidades');

module.exports = async (req, res) => {
    if(req.query.id) {
        const novidade = await getOneById(req.query.id)

        if(novidade.status !== 200) return res.status(400).json({ novidade })

        return res.status(novidade.status).json(novidade.novidade);

    } else if(req.query.title) {
        const novidade = await getOneByTitle(req.query.title);

        if(novidade.status !== 200) return res.status(400).json({ novidade })

        return res.status(novidade.status).json(novidade.novidade);

    } else if(req.query.full) {
        const novidades = await getAll();

        if(novidades.status !== 200) return res.status(400).json({ novidades })

        return res.status(novidades.status).json(novidades.novidades);

    } else if(req.query.carousel) {
        const novidades = await getCarousel();

        if(novidades.status !== 200) return res.status(400).json({ novidades })

        return res.status(novidades.status).json(novidades.carousel);

    } else {
        const novidades = await getAllActive();

        if(novidades.status !== 200) return res.status(400).json({ novidades })
        
        return res.status(novidades.status).json(novidades.novidades);
    }
}

module.exports.admin = async (req, res) => {
    const novidades = await getAll();

    if(novidades.status !== 200) return res.status(400).json({ novidades })

    return res.status(novidades.status).json(novidades.novidades);
}