const { getAllUsers, createUser, updateUser, getOneUser } = require('../../controllers/userController');

const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:userId', getOneUser);
router.post('/', createUser);
router.put('/:userId', updateUser);








module.exports = router;