const { getAllThoughts, getOneThought, createThought, addReaction, updateThought, deleteThought, deleteReaction } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.get('/', getAllThoughts);
router.get('/:thoughtId', getOneThought);

router.post('/user/:userId', createThought);
router.post('/:thoughtId/reaction', addReaction);

router.put('/:thoughtId', updateThought);

router.delete(':thoughtId', deleteThought);
router.delete('/:thoughtId/:reactionId', deleteReaction);

module.exports = router;