const express = require('express');
const { check, validationResult } = require('express-validator');

const Router = express.Router();

const { auth, postAuth } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
 
Router.route('/')
    // .get(getIndex)
    .get(authMiddleware, auth)
    .post(
            [
                check('email', 'A valid Email is required...').isEmail(),
                check('password', 'Please enter a password with 6 or more characters...').isLength({ min: 6 })
            ],
            postAuth,
            
    ); 

Router.route('/:id')
    .put()
    .delete();

module.exports = Router;
