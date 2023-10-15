const express = require('express');
const viewsController = require('../Controllers/viewsController');


const router = express.Router();

router.get('/', viewsController.getIndex);
router.get('/about', viewsController.aboutMe);
router.get('/portfolio', viewsController.portfolio);
router.get('/contact', viewsController.contact);

module.exports = router;