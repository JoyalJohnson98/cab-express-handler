const express =require('express');
const cc = require('../controllers/cabController');


const router = express.Router()

router.get('/cabdetail', cc.index);
router.get('/cab', cc.create);
router.post('/cab', cc.createPost);
router.get('/cabUpdate/:id', cc.update);
router.post('/cabUpdate/:id', cc.updatePost);
router.get('/cabDelete/:id', cc.delete);


module.exports = router;