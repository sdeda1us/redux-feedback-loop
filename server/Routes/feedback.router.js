const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/feedback', (req, res) => {
    console.log('POST to pg');
    sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
                VALUES ($1, $2, $3, $4)`
    pool.query(sqlText, 
        [req.body.feelings, req.body.understanding, req.body.supported, req.body.comments])
    .then((result) => {
        
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

module.exports = router;