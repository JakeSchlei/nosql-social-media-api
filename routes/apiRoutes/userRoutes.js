const { getAllUsers, createUser, updateUser, getOneUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:userId', getOneUser);

router.post('/', createUser);
router.post('/', addFriend);

router.put('/:userId', updateUser);


router.delete('/:userId', deleteUser);
router.delete('/:userId', removeFriend);








module.exports = router;