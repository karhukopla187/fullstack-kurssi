const fs = require('fs').promises;
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(cors())  
app.use(express.json());

app.get('/', async (req, res) => {
    try {
      const data = await fs.readFile('./quizdata.json', { encoding: 'utf8', flag: 'r' });
      res.send(data)
      
      if (adminCreds[0] == null) {
        const adminData = await fs.readFile('./admindata.json',{ encoding: 'utf8', flag: 'r' });
        //res.send(admindata)
        adminCreds.push(adminData)
      }
    } catch {
      console.error(err)
    }
  })

  if (user2.type === adminCredentials.type && user2.pass === adminCredentials.pass) {
    app.post('/', async (req, res) => {
      try  {
        fs.writeFile('kouludata.json', JSON.stringify(req.body));
        res.send('sent')
      } catch {
        console.error(err)
      }
    })
  }
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })