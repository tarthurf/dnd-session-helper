const router = require('express').Router();
const userRoutes = require('./users.js');
const characterRoutes = require('./characters.js')

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;