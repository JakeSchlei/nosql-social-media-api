const { getAllThoughts, getOneThought, createThought } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.get('/', getAllThoughts);
router.get('/:thoughtId', getOneThought);

router.post('/user/:userId', createThought);

module.exports = router;