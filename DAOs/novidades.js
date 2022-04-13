const database = require('../models');
const { Op } = require('sequelize');

module.exports.getAll = async () => {
    try {
        const novidades = await database.Novidades.findAll({
            order: [
                ['id', 'DESC']
            ]
        });
        
        console.log({ status: 200, scope: 'DAO - novidades - getAll'})
        return { status: 200, novidades }
    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - novidades - getAll'})
        return { status: 500, msg: error }
    }
}

module.exports.getAllActive = async () => {
    try {
        const novidades = await database.Novidades.findAll({
            where: { active: true }
        });
        
        console.log({ status: 200, scope: 'DAO - novidades - getAll'})
        return { status: 200, novidades }
    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - novidades - getAll'})
        return { status: 500, msg: error }
    }
}

module.exports.getOneById = async (id) => {
    try {
        const novidade = await database.Novidades.findOne({
            where: { 
                id: id 
            }
        });
        
        console.log({ status: 200, scope: 'DAO - novidades - getOne'})
        return { status: 200, novidade }
    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - novidades - getOne'})
        return { status: 500, msg: error }
    }
}

module.exports.getOneByTitle = async (title) => {
    try {
        const novidade = await database.Novidades.findOne({
            where: { 
                // active: true, 
                title: title 
            }
        });
        
        if(novidade) {
            console.log({ status: 200, scope: 'DAO - novidades - getOne'})
            return { status: 200, novidade }
        } else {
            return { status: 400, error: "GetOneByTitle Error" }
        }

    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - novidades - getOne'})
        return { status: 500, msg: error }
    }
}

module.exports.getCarousel = async () => {
    try {
        const carousel = await database.Novidades.findAll({
            where: {
                display_home_order: {
                    [Op.gt]: 0
                },
                active: true
            },
            order: [
                ['display_home_order', 'ASC']
            ]
        });

        console.log({ status: 200, scope: 'DAO - novidades - getCarousel' })
        return { status: 200, carousel }
    } catch (err) {
        console.log({ status: 404, msg: err, scope: 'DAO - novidades - getCarousel'})
        return { status: 404, msg: err }
    }
}

module.exports.createNovidade = async (novidade) => {
    try {
        const novidadeCreated = await database.Novidades.create(novidade);
        
        console.log({ status: 201, scope: 'DAO - novidades - createNovidade'})
        return { status: 201, novidadeCreated }
    } catch (error) {
        console.log({ status: 500, msg: error, scope: 'DAO - novidades - createNovidade'})
        return { status: 500, msg: error }
    }
}

module.exports.updateNovidadeById = async (id, newObj) => {
    try {
        await database.Novidades.findOne({
            where: { id }
        });

        try {
            await database.Novidades.update(
                newObj,
                { where: { id } }
            );

            console.log({ status: 200, scope: 'DAO - novidades - updateNovidadeById' })
            return { status: 200 }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - novidades - updateNovidadeById'})
            return { status: 500, msg: error }

        }
    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - novidades - updateNovidadeById'})
        return { status: 404, msg: error }

    }
}

module.exports.deleteNovidadeById = async (id) => {
    try {
        await database.Novidades.findOne({
            where: { id }
        });

        try {
            await database.Novidades.update(
                { active: false, display_home_order: null },
                { where: { id } }
            )

            console.log({ status: 200, scope: 'DAO - novidades - deleteNovidadeById' })
            return { status: 200 }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - novidades - deleteNovidadeById'})
            return { status: 500, msg: error }
        }

    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - novidades - deleteNovidadeById'})
        return { status: 404, msg: error }
    }
}

module.exports.reactivateNovidadeById = async (id) => {
    try {
        await database.Novidades.findOne({
            where: { id }
        });

        try {
            await database.Novidades.update(
                { active: true },
                { where: { id } }
            )

            console.log({ status: 200, scope: 'DAO - novidades - reactivateNovidadeById' })
            return { status: 200 }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - novidades - reactivateNovidadeById'})
            return { status: 500, msg: error }
        }

    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - novidades - reactivateNovidadeById'})
        return { status: 404, msg: error }
    }
}

module.exports.reorderBulkDisplay = async (arr) => {
    try {
        const upsert = async data => {
            await database.sequelize.query(
                `BEGIN 
                    DECLARE @json NVARCHAR(MAX); 
                    SET @json = :dataToBeUpserted 
                    MERGE INTO dbo.Novidades AS Target 
                    USING (SELECT * from OpenJson(@json) WITH ( 
                        id nvarchar(32)
                    )) AS Source 
                    ON (Target.id = ${data.id}) 
                    WHEN MATCHED THEN 
                    UPDATE SET 
                        Target.display_home_order = ${data.display_home_order} 
                    WHEN NOT MATCHED THEN           
                        INSERT (novidade_type, image, publish_date, link, author, author_depto, category, title, title_text, original_text, active, display_home_order, createdAt, updatedAt) 
                        VALUES ('${data.novidade_type}', '${data.image}', '${data.publish_date}', '${data.link}', '${data.author}', '${data.author_depto}', '${data.category}', '${data.title}', '${data.title_text}', '${data.original_text}', '${data.active}', '${data.display_home_order}', '${data.createdAt}', '${data.updatedAt}');
                END`,
                {
                    replacements: {
                        dataToBeUpserted: JSON.stringify(data)
                    },
                }
            )
        }

        arr.forEach(async el => {
            await upsert(el)
        })

        console.log({ status: 200, scope: 'DAO - novidades - reorderBulkDisplay' })
        return { status: 200 }

    } catch (err) {
        console.log({ status: 500, msg: err, scope: 'DAO - novidades - reorderBulkDisplay'})
        return { status: 500, msg: err }
    }
}

module.exports.restoreOrderDisplayById = async (id) => {
    try {
        await database.Novidades.findOne({
            where: { id }
        });

        try {
            await database.Novidades.update(
                { display_home_order: 1 },
                { where: { id } }
            )

            console.log({ status: 200, scope: 'DAO - novidades - restoreOrderDisplayById' })
            return { status: 200 }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - novidades - restoreOrderDisplayById'})
            return { status: 500, msg: error }
        }

    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - novidades - restoreOrderDisplayById'})
        return { status: 404, msg: error }
    }
}

module.exports.removeOrderDisplayById = async (id) => {
    try {
        await database.Novidades.findOne({
            where: { id }
        });

        try {
            await database.Novidades.update(
                { display_home_order: null },
                { where: { id } }
            )

            console.log({ status: 200, scope: 'DAO - novidades - removeOrderDisplayById' })
            return { status: 200 }

        } catch (error) {
            console.log({ status: 500, msg: error, scope: 'DAO - novidades - removeOrderDisplayById'})
            return { status: 500, msg: error }
        }

    } catch (error) {
        console.log({ status: 404, msg: error, scope: 'DAO - novidades - removeOrderDisplayById'})
        return { status: 404, msg: error }
    }
}
