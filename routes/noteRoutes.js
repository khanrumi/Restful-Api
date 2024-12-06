const express = require('express');
const router = express.Router();  

router.get('/api/notes', (req, res) => {
    res.json([
        { id: 1, title: 'First Note', content: 'This is the first note.' },
        { id: 2, title: 'Second Note', content: 'This is the second note.' }
    ]);
});

module.exports = router;  
