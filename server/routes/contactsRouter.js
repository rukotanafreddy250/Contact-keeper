const express = require('express');
const { check, validationResult } = require('express-validator');

const Router = express.Router();

const Auth = require('../middleware/authMiddleware')
const { getIndex, postAddContacts, getContacts, putEditContacts, deleteContacts } = require('../controllers/contractControllers');


const ContactModel = require('../models/contactModel');
const authMiddleware = require('../middleware/authMiddleware');

Router.route('/')
    // .get(getIndex)
    .get([ authMiddleware ], getContacts)
    .post(
            [ authMiddleware,
                check('name', 'name is required')
                    .not()
                    .isEmpty()
            ],
            postAddContacts, 
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
            putEditContacts,
        )
    .delete(deleteContacts);

module.exports = Router;
