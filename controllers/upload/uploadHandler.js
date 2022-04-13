const router = require('express').Router();

//Controllers import
const postImageController = require('./postImage');

//Middlewares
const adminAccessMiddleware = require('../../middlewares/adminAccess');
const frontAuthMiddleware = require('../../middlewares/frontAuth');
const authMiddleware = require('../../middlewares/auth');

router.post('/', 
    frontAuthMiddleware, 
    authMiddleware, 
    adminAccessMiddleware, 
    postImageController
);

module.exports = router