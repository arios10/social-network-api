const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    deleteReaction
} = require('../../controllers/thought-controller')

//read all thoughts and create a thought
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

//read, update, delete by id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

//create reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

//delete reaction
router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;