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
exports.getContacts = async (req, res) => {
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
exports.postAddContacts = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password, phone, type } = req.body;
        try {

            const newContract = new contactModel({
                name,
                email,
                phone,
                type,
                user: req.user.id
            })
            const contacts = await newContract.save();
            
            res.json({
                success: true,
                data: contacts
            });    
            
        } catch (error) {
            console.error(error.message);
            res.status(500).send(`Server Error ${error.message}`);
        }

        // await usersModel.create(req.body);
        // res.send('post created');
    } catch (error) {
        console.error(`error connecting`);
        res.status(500).send(`error ${error.message}`);
    }
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.putEditContacts = (req, res) => {
    res.send('put controller');
}

// @route   GET API/contracts
// @desc    Get all users contracts
// @access  private
exports.deleteContacts = (req, res) => {
    res.send('Delete controller');
}



