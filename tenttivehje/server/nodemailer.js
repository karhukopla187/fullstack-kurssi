const express = require('express')
const app = express()
const port = 3000





var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ohmanpatrick@gmail.com',
    pass: 'ejroynianibkveck'
  }
});

var mailOptions = {
  from: 'ohmanpatrick@gmail.com',
  to: 'juvuorin@gmail.com',
  subject: 'nyt olis bitcoineja myynnissä erikoistarjous',
  text: 'black friday erikoistarjous, lähetä yksi bitcoini meille niin lähetämme kaksi takaisin terveisin Patrick'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 



app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
  })