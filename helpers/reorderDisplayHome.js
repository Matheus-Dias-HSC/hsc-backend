const { getCarousel, reorderBulkDisplay } = require('../DAOs/novidades');

module.exports = async (novidadeToInsertOrUpdateOrDelete, isDelete) => {
    console.log('Reorder Display Home - Novidade inserida ou atualizada')

    const { carousel } = await getCarousel()

    const necessaryToReorder = carousel.find(el => el.dataValues.display_home_order == novidadeToInsertOrUpdateOrDelete.display_home_order 
                                                    && novidadeToInsertOrUpdateOrDelete.display_home_order > 0 
                                                    && novidadeToInsertOrUpdateOrDelete.display_home_order < 16);
                                                    
        const carouselReordered = carousel.map(el => {
        if(necessaryToReorder) {
            if(el.dataValues.display_home_order >= novidadeToInsertOrUpdateOrDelete.display_home_order) {
                if(el.dataValues.display_home_order >= 15 && carousel.length >= 15) {
                    return {...el.dataValues, display_home_order: null}
                } else {
                    return {...el.dataValues, display_home_order: el.dataValues.display_home_order + 1}
                }
            } else {
                return el.dataValues
            }
        }
    })

    necessaryToReorder ? await reorderBulkDisplay(carouselReordered) : null

}