const router = require('express').Router();

const authenticatorController = require('./postAuth');
const frontAuthMiddleware = require('../../middlewares/frontAuth');

router.post('/', frontAuthMiddleware, authenticatorController.auth);
router.post('/verify', frontAuthMiddleware, authenticatorController.verify);

module.exports = router;