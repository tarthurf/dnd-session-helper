const router = require('express').Router();
const userRoutes = require('./users.js');
const characterRoutes = require('./characters.js')

// Exports api routes to api index
router.use('/user', userRoutes);
router.use('/character', characterRoutes);

module.exports = router;