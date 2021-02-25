const router=require('express').Router();
let Support = require('../models/support.model');

router.route('/').get((req,res)=>{
    Support.find()
    .then(supports => res.json(supports))
    .catch(err=> res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res)=>{
     const supportDetails = {
         name: req.body.name,
         comapny: req.body.comapny,
         phone: req.body.company,
         email:req.body.company,
         reason: req.body.reason,
         description: req.body.description
     }
     const newSupport = new Support(supportDetails);
     newSupport.save()
     .then(()=> res.json('User added!!'))
     .catch(err => res.status(400).json('Error'+err))

})

module.exports = router;