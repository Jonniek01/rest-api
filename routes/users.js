

const express = require("express");
const { getUser, getUsers, logIn, create } = require("../controllers/users.js") ;

const router = express.Router();

router.get('/', getUsers)
router.get('/:email', getUser)
router.post('/login',logIn)
router.post('/createuser', create)




module.exports = {router}