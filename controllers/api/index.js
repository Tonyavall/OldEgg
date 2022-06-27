//THIS index file is the entry point of our API(data) routes,
//it will bring in all api routes and export 1 router middleware
const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/', userRoutes);

module.exports = router;
