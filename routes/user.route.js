const express = require('express');
const { createUser, getUsers, getUserById, deleteUser } = require('../controller/user.controller');

const router = express.Router();

router.post('/crateuser', createUser); // Create a new user
router.get('/getuser', getUsers); // Get all users


module.exports = router;
