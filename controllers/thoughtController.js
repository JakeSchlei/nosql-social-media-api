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
        const newThought = await Thought.create(
            req.body   
        );
        // const addThought = await User.findByIdAndUpdate(
        //     req.params.id,
        //     {
        //         $addToSet: {
        //             thoughts: req.params.thoughtId
        //         }
        //     },
        //     {new: true}
        // );
        res.json(newThought)

    } catch (error) {
        res.status(500).json({ error }); 
    }
};

module.exports = {
    createThought,
    getAllThoughts,
    getOneThought
}