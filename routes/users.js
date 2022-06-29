

const express = require("express");
const { getUser, getUsers, logIn } = require("../controllers/users.js") ;

const router = express.Router();

router.get('/', getUsers)
router.get('/:email', getUser)
router.post('/login',logIn)




module.exports = {router}