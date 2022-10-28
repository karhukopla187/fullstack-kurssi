const fs = require('fs').promises;
const express = require('express')  //Jos ei toimi, niin "npm install express"
const cors = require('cors')
const app = express()
const port = 8080
//const path = require('path')

app.use(cors())  //jos ei toimi, niin "npm install cors"
app.use(express.json());

/*
tulipa vasta tässä commitin aikana mieleen että varmaankin
oli ajatuksena käyttöliittymän kautta iskeä nämä tiedot,
elikkäs tyyliin kirjoitetaan käyttäjätiedot sisään ja vertaillaan admin-tietoihin
Koitin tässä vielä lätkiä kasaan tuommoista tuonne Appiin ja muualle mutta tässä on nyt tämmöinen raakile tarkistus
*/
const adminCredentials = {
  id: "paroni",
  pass: "password",
  type: "admin"
}

//tänne tiedot admindata.jsonista
const adminCreds = []

const user1 = {
  id: "prole",
  pass: "parasSalasana123",
  type: "user"

}
const user2 = {
  id: "paroni",
  pass: "password",
  type: "admin"
}

app.get('/', async (req, res) => {
  try {
    console.log("Palvelimeen tultiin kyselemään dataa")
    //readFile ja writeFile vissiin itsessään asynkroninen vs readFileSync
    const data = await fs.readFile('./kouludata.json', { encoding: 'utf8', flag: 'r' }); //Voi kestää useita sekunteja!
    res.send(data)
    
    //haetaan admin-tiedot
    if (adminCreds[0] == null) {
      const adminData = await fs.readFile('./admindata.json',{ encoding: 'utf8', flag: 'r' });
      //res.send(admindata)
      adminCreds.push(adminData)
    }
  } catch {
    console.error(err)
  }
})

//käyttäjästatuksen tarkistus
//if (admin.type === adminCreds[0].type)
if (user2.type === adminCredentials.type && user2.pass === adminCredentials.pass) {
  app.post('/', async (req, res) => {
    try  {
      console.log("Palvelimeen tultiin tallentelemaan dataa")
      fs.writeFile('kouludata.json', JSON.stringify(req.body));
      res.send('Tais datan tallennus onnistua, kun tänne tultiin :)')
    } catch {
      console.error(err)
    }
  })
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//s