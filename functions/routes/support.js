const router=require('express').Router();
let Support = require('../models/support.model');
var nodemailer = require ('nodemailer');    


    var transporter = nodemailer.createTransport({
        host: "hexlr.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        requireTLC:true,
        auth: {
          user: "contact@hexlr.com",
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
            from: 'contact@hexlr.com',  
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
          const mailOptions2 = { 
            from: 'contact@hexlr.com',  
            to: req.body.email,  
            subject: `Hexlr | Support Update`, 
            html: `<!DOCTYPE html>
            <!-- Set the language of your main document. This helps screenreaders use the proper language profile, pronunciation, and accent. -->
            <html lang="en">
              <head>
                <!-- The title is useful for screenreaders reading a document. Use your sender name or subject line. -->
                <title>Hexlr | Update</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <!-- Never disable zoom behavior! Fine to set the initial width and scale, but allow users to set their own zoom preferences. -->
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <style type="text/css">
                    /* CLIENT-SPECIFIC STYLES */
                    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
                    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
                    img { -ms-interpolation-mode: bicubic; }
            
                    /* RESET STYLES */
                    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
                    table { border-collapse: collapse !important; }
                    body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
            
                    /* iOS BLUE LINKS */
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: none !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                    }
            
                    /* GMAIL BLUE LINKS */
                    u + #body a {
                        color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
            
                    /* SAMSUNG MAIL BLUE LINKS */
                    #MessageViewBody a {
                        color: inherit;
                        text-decoration: none;
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                    }
            
                    /* These rules set the link and hover states, making it clear that links are, in fact, links. */
                    /* Embrace established conventions like underlines on links to keep emails accessible. */
                    a { color: #B200FD; font-weight: 600; text-decoration: underline; }
                    a:hover { color: #000000 !important; text-decoration: none !important; }
            
                    /* These rules adjust styles for desktop devices, keeping the email responsive for users. */
                    /* Some email clients don't properly apply media query-based styles, which is why we go mobile-first. */
                    @media screen and (min-width:600px) {
                        h1 { font-size: 48px !important; line-height: 48px !important; }
                        .intro { font-size: 24px !important; line-height: 36px !important; }
                    }
                </style>
              </head>
              <body style="margin: 0 !important; padding: 0 !important;">
            
                <!-- Some preview text. -->
                <div style="display: none; max-height: 0; overflow: hidden;">
                        
                </div>
                <!-- Get rid of unwanted preview text. -->
                <div style="display: none; max-height: 0px; overflow: hidden;">
                &nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
                </div>
            
                <!-- This ghost table is used to constrain the width in Outlook. The role attribute is set to presentation to prevent it from being read by screenreaders. -->
                <!--[if (gte mso 9)|(IE)]>
                <table cellspacing="0" cellpadding="0" border="0" width="600" align="center" role="presentation"><tr><td>
                <![endif]-->
                <!-- The role and aria-label attributes are added to wrap the email content as an article for screen readers. Some of them will read out the aria-label as the title of the document, so use something like "An email from Your Brand Name" to make it recognizable. -->
                <!-- Default styling of text is applied to the wrapper div. Be sure to use text that is large enough and has a high contrast with the background color for people with visual impairments. -->
                <div role="article" aria-label="An email from Your Brand Name" lang="en" style="background-color: white; color: #2b2b2b; font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 18px; font-weight: 400; line-height: 28px; margin: 0 auto; max-width: 600px; padding: 40px 20px 40px 20px;">
                    
                    <!-- Logo section and header. Headers are useful landmark elements. -->
                    <header>
                        <!-- Since this is a purely decorative image, we can leave the alternative text blank. -->
                        <!-- Linking images also helps with Gmail displaying download links next to them. -->
                        <a href="https://hexlr.com">
                            <center><img src="https://hexlr-support.netlify.app/static/media/logo.52e7776c.png" alt="" height="80" width="80"></center>
                        </a>
                        <!-- The h1 is the main heading of the document and should come first. -->
                        <!-- We can override the default styles inline. -->
                        <h1 style="color: #000000; font-size: 32px; font-weight: 800; line-height: 32px; margin: 48px 0; text-align: center;">
                            Your response has been recorded with us. Token Number: `+res1._id+`
                        </h1>
                    </header>
            
                    <!-- Main content section. Main is a useful landmark element. -->
                    <main>
                        <!-- This div is purely presentational, providing a container for the message. -->
                        <div style="background-color: ghostwhite; border-radius: 4px; padding: 24px 48px;">
                            <!-- This ghost table is used solely for padding in Word-based Outlook clients. -->
                            <!--[if (gte mso 9)|(IE)]>
                            <table cellspacing="0" cellpadding="0" border="0" width="600" align="center" role="presentation"><tr><td style="background-color: ghostwhite;font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; padding: 24px 48px 24px 48px;">
                            <![endif]-->
            
                            <!-- Body copy -->
                            <p>
                                Thank you for giving time with us. Our associates will connect you soon with the update. 
                            </p>
                    
                            <!-- This link uses descriptive text to inform the user what will happen with the link is tapped. -->
                            <!-- It also uses inline styles since some email clients won't render embedded styles from the head. -->
                            <a href="https://hexlr.com/support" style="color: #B200FD; text-decoration: underline;">Track your live status</a>
            
                            <p>
                                If you think this email was sent in error, please contact our team by phone at +91 9645803089 or reply to this email directly. Thank you!  
                            </p>
                            <!--[if (gte mso 9)|(IE)]>
                            </td></tr></table>
                            <![endif]-->
                        </div>
                    </main>
            
                  
            
                </div>
                <!--[if (gte mso 9)|(IE)]>
                </td></tr></table>
                <![endif]-->
              </body>
            </html>` 
          };
          transporter.sendMail (mailOptions, function (err, info) { 
            if (err) {
                console.log (err) 
              //  res.json(res1._id+JSON.stringify(err))
            }      
            else {
                console.log (info); 
               // res.json(res1._id+JSON.stringify(info))
            }
             
          })

          transporter.sendMail (mailOptions2, function (err, info) { 
            if (err) {
                console.log (err) 
               
            }      
            else {
                console.log (info); 
                const ress=[]
                ress.push({
                    token: res1._id,
                    emailres: JSON.stringify(info)
                })
                res.json(ress);
            }
             
          })
          
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