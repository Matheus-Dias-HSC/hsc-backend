const router = require('express').Router();

const getUsuario = require('./getUsuario');
const createUsuario = require('./postUsuario');
const updateUsuario = require('./putUsuario');
const deleteUsuario = require('./deleteUsuario');

const adminAccessMiddleware = require('../../middlewares/adminAccess');
const frontAuthMiddleware = require('../../middlewares/frontAuth');
const authMiddleware = require('../../middlewares/auth');

router.get('/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, getUsuario);
router.post('/', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, createUsuario);
router.put('/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, updateUsuario);
router.delete('/:id', frontAuthMiddleware, authMiddleware, adminAccessMiddleware, deleteUsuario);

module.exports = router 