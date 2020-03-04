import express from 'express';
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
    try{
        const messages = await Message.find(); // mongoose method
        res.json(messages);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const message = new Message({
        author: req.body.author,
        message: req.body.message,
    });
    res.json(message);
    try {
        const savedMessage = await message.save();
        res.json(savedMessage);
    }
    catch(err) {
        res.json({message: err});
    }
});

module.exports = router;