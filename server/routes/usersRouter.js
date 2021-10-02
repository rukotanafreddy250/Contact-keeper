const express = require('express');
const { check, validationResult } = require('express-validator');

const Router = express.Router();

const Auth = require('../middleware/authMiddleware')
const { getUsers, postAddUsers, putEditUser, deleteUser } = require('../controllers/userControllers');


const ContactModel = require('../models/contactModel');
const authMiddleware = require('../middleware/authMiddleware');

Router.route('/')
    // .get(getIndex)
    .get([ authMiddleware ], getUsers)
    .post(
            [ 
                check('name', 'name is required')
                    .not()
                    .isEmpty(),
                check('email', 'A valid Email is required...').isEmail(),
                check('password', 'Please enter a password with 6 or more characters...').isLength({ min: 6 })
            ],
            postAddUsers, 
    );

Router.route('/:id')
    .put(
            [ 
                check('name', 'name is required')
                    .not()
                    .isEmpty(),
                check('email', 'A valid Email is required...').isEmail(),
                check('password', 'Please enter a password with 6 or more characters...').isLength({ min: 6 })
            ],
            putEditUser,
        )
    .delete(deleteUser);

module.exports = Router;
