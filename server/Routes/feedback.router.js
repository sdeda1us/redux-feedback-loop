const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('POST to pg');
    sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) 
                VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, 
        [req.body.feelings, req.body.understanding, req.body.supported, req.body.comments])
    .then((result) => {
        
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})

router.get('/', (req, res) => {
    console.log('POST to pg');
    sqlText = `SELECT * FROM feedback ORDER BY ID`;
    pool.query(sqlText)
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error GET', error)
        res.sendStatus(500);
    });
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    console.log('DELETING', id);
    let sqlText = 'DELETE FROM feedback WHERE id=$1;';
    pool.query(sqlText, [id])
    .then((result) => {
        console.log(`record ${id} deleted`);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

module.exports = router;