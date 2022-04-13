const router = require('express').Router();

//Controllers import
const getNovidades = require('./getNovidades');
const postNovidade = require('./postNovidade');
const deleteNovidade = require('./deleteNovidade');
const updateNovidade = require('./putNovidade');

//Middlewares
const adminAccessMiddleware = require('../../middlewares/adminAccess');
const frontAuthMiddleware = require('../../middlewares/frontAuth');
const authMiddleware = require('../../middlewares/auth');

//Routes definition
router.get('/', getNovidades);
router.get('/admin', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, getNovidades.admin);
router.post('/', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, postNovidade);
router.post('/reactivate/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, postNovidade.reactivate);
router.post('/restore-order-display/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, postNovidade.restoreOrderDisplay);
router.post('/remove-order-display/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, postNovidade.removeOrderDisplay);
router.put('/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, updateNovidade);
router.delete('/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, deleteNovidade);

module.exports = router