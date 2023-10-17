const express = require('express');
const viewsController = require('../Controllers/viewsController');
const email = require('../Utils/email');


const router = express.Router();

router.get('/', viewsController.getIndex);
router.get('/about', viewsController.aboutMe);
router.get('/portfolio', viewsController.portfolio);
router.get('/contact', viewsController.contact);

router.post('/contact', email.sendContactEmail);

module.exports = router;