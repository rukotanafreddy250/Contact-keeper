const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const config = require('config');

const userModel = require('../models/userModel');


// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.auth = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id).select('-password');
        res.json({
            success: true,
            data: user
        });
    } catch (error) {
        console.error(`server Error ${error.message} `);
        res.json({
            success: false,
            error: `server Error: ${error.message}`
        });
    }
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.postAuth = async (req, res) => {
    const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: ` Invalid Credentials...` });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({ msg: `Invalid Credentials...` })
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            // {
            //     expiresIn: 360000
            // },
            (err, token) => {
                if(err) throw err;
                res.json({
                    msg:`Welcome ${ user.name.toUpperCase() }`, 
                    token
                })
            }
        )


    } catch (error) {
        console.error(`server Error ${error.message} `);
        res.status(500).json({
            success: false,
            error: `${error.message}` 
        })
    }
}