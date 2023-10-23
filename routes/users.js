const { Router } = require('express')
const {usersList,listUserByID, adduser, deleteUsers, UpdateUser}= require('../controllers/users');
const {addRow} = require('../models/users');

const router = Router();

//http://localhost:3000/api/v1/users/
router.get('/',usersList);
router.get('/:id', listUserByID);
//router.post('/',usersList);
router.put('/',adduser);
router.patch('/:id', UpdateUser);
router.delete('/:id', deleteUsers);

module.exports = router;