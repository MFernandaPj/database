const { Router } = require("express")
const {usersList}= require('../controllers/users');
const router = Router();

//http://localhost:3000/api/v1/users/
router.get('/',usersList);

//router.post('/',usersList);
//router.put('/',usersList);
//router.pacht('/',usersList);
//router.detele('/',usersList);

module.exports = router;