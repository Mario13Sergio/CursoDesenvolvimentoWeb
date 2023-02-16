const { Router } = require('express');
const router = Router();
const contrrollers = require('../contrrollers');

router.get('/',(req, res) => {
    res.send('Class 04 - Controllers');
});

router.post('/user', contrrollers.create)  
router.get('/user', )  

module.exports = router;
