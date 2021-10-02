// const { validationResult } = require('express-validator');
const usersModel = require('../models/userModel');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const config = require('config');

const userModel = require('../models/userModel');
const contactModel = require('../models/contactModel');

exports.getIndex = (req, res) => {
    res.send('MVC Is working ready to go');
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.getUsers = async (req, res) => {
    try {
        const contacts = await contactModel.find({ user: req.user.id }).sort({ date: -1 })
        res.json({
            success: true,
            data: contacts
        });
    } catch (error) {
        console.error(`server Error ${error.message} `);
        res.status(500).json({
            success: false,
            error: `${error.message}`
        })
    }
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.postAddUsers = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;
        try {
            let user = await contactModel.findOne({ email });
            if(user) {
                res.status(400).json({
                    message: 'User already exits'
                });
            }
            user = new userModel({
                name,
                email,
                password
            })
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();
            console.log(user);

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'), {
                // expiresIn: 360000
            }, (err, token) => {
                if(err) throw err;
                res.status(200).json({
                    success: true,
                    msg: "data created",
                    data: user,
                    token: token
                })
            });
            


            // res.status(200).json({
            //     success: true,
            //     msg: "data created",
            //     data: user
            // })
        } catch (error) {
            res.status(500).send(`Server Error ${error.message}`);
        }




        // await usersModel.create(req.body);
        // res.send('post created');
    } catch (error) {
        console.log(`error connecting`);
        res.send(`error ${error.message}`);
    }
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.putEditUser = (req, res) => {
    res.send('put controller');
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.deleteUser = (req, res) => {
    res.send('Delete controller');
}



