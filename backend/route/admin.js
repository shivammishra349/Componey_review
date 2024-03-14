let express=require('express');

let router=express.Router();

let Controller=require('../controller/admin')

router.post('/add-review',Controller.addReview);

router.get('/search',Controller.singleData)

router.get('/get-data',Controller.getDetail)

module.exports=router