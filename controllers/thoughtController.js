const { Thought, User } = require('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ error }); 
    }
};

const getOneThought = async (req, res) => {
    try {
       const oneThought = await Thought.findById(
        req.params.thoughtId
       );
       res.json(oneThought);
    } catch (error) {
        res.status(500).json({ error }); 
    }
};

const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);
    const thoughtArray = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $addToSet: {
          thoughts: newThought._id
        }
      }
    )
    res.send('Thought Added!')
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { ...req.body },
      { new: true }
    );
    res.json(updatedThought)
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteThought = async (req, res) => {
  try {
    const deleteThoughts = await Thought.findByIdAndDelete(
      req.params.thoughtId
    );
    res.send('Thought Deleted!')
  } catch (error) {
    res.status(500).json({ error });
  }
};

const addReaction = async (req,res) => {
  try {
    const newReactions = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $addToSet: {
          reactions: req.body
        }
      },
      { new: true }
    )
    res.json(newReactions);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const deletedReaction = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      {
        $pull: {
          reactions: { reactionId: req.params.reactionId }
        }
      },
      { new: true },
    )
    res.send('Reaction Deleted!')
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
   
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
}