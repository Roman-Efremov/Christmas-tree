const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
router.get('/', (req, res) => {
   var events = [ 
       { "city": faker.address.city(), 
  	   	 "street": faker.address.streetAddress()
  	   }
  	];
});
module.exports = router;
