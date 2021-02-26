const router=require('express').Router();
let Support = require('../models/support.model');

router.route('/').get((req,res)=>{
    Support.find()
    .then(supports => res.json(supports))
    .catch(err=> res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res)=>{
     const supportDetails = {
         _id: 'HL'+Math.floor(1000 + Math.random() * 9000),
         name: req.body.name,
         comapny: req.body.comapny,
         phone: req.body.phone,
         email:req.body.email,
         reason: req.body.reason,
         description: req.body.description,
         status:"pending"
     }
     const newSupport = new Support(supportDetails);
     newSupport.save()
     .then((res1)=> res.json(res1._id))
     .catch(err => res.status(400).json('Error'+err))

})

router.route('/:id').get((req,res)=>{
    Support.findById(req.params.id).exec()
    .then(support=>{
        res.json(support)
    })
    .catch(err=>res.status(400).json('Error'+err))
})

module.exports = router;