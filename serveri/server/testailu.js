const bodyparser = require('body-parser')
const fs = require('fs');
const express = require('express')
const cors = require('cors');
const { Pool } = require('pg');
const app = express()
const port = 8080

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})


app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

let data = fs.readFileSync('./examdata.json', { encoding: 'utf8', flag: 'r' });


app.get('/', (req, res) => {
   res.send(data)
  })

  app.post('/koulut/:kouluId/luokat/:luokkaId/oppilaat:', async (req, res) => {  
    const kouluId = Number(req.params.luokkaId)  
    const luokkaId = Number(req.params.kouluId)  
    
    console.log ("nyt lisätään kysymystä")
  //    console.log ("kouluId",kouluId)
      try {
        result = await pool.query("INSERT INTO luokka (koulu_id, nimi) VALUES ($1,$2) ",[id,req.body.nimi])
        res.send('Tais datan tallennus onnistua')    
      }
      catch(e){
        res.status(500).send(e)
      }

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })