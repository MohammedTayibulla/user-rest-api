const express = require('express');
const router = express.Router();
const userController=require('../controllers/userControllers');
/* GET users listing. */
router.get('/users',userController.allusers);
/* GET single user listing. */
router.get('/users/:id',userController.singleuser);
/* POST add users  */
router.post('/users',userController.adduser);
/* PUT edit user. */
router.put('/users/:id',userController.edituser);
/* DELETE delete user */
router.delete('/users/:id',userController.deleteuser);

module.exports = router;
