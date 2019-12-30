const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/trees', (req, res) => {
    res.render('trees', 
        { "trees": [ 
       { "sale": "9.99$", "height": "2.5 metres"}, 
       { "sale": "8.56$", "height": "2.2 metres" },
       { "sale": "10.99$", "height": "2.8 metres" }
          ]
        }
    );
});




module.exports = router;
