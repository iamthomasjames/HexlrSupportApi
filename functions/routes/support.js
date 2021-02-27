const router=require('express').Router();
let Support = require('../models/support.model');
var nodemailer = require ('nodemailer');    


    var transporter = nodemailer.createTransport({
        host: "thomasjames.in",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        requireTLC:true,
        auth: {
          user: "mail@thomasjames.in",
          pass: process.env.Google_pass
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
      });


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
     .then((res1)=> {
        const mailOptions = { 
            from: 'mail@thomasjames.in',  
            to: 'tonyjose420@gmail.com,antonythomas96.96@gmail.com,mevinxavier000@gmail.com,mail@thomasjames.in',  
            subject: `We have a New request Please take Action for `+req.body.name+``, 
            html: `
            <pre>Name:`+req.body.name+`,
            Company: `+req.body.comapny+`,
            Phone: `+req.body.phone+`,
            Email: `+req.body.email+`,
            Reason: `+req.body.reason+`,
            Description: `+req.body.description+`
            </pre>` 
          };
          transporter.sendMail (mailOptions, function (err, info) { 
            if (err) {
                console.log (err) 
                res.json(res1._id+err)
            }      
            else {
                console.log (info); 
                res.json(res1._id+info)
            }
             
          })
          res.json(res1._id)
        })
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