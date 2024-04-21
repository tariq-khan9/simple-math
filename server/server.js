const express = require("express")
const cors = require("cors")
const pool = require('./database');
const routes = require('./routes');


const app = express()

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    console.log(req.body)
    res.send('This is a GET request to /api' + req.body);
  });

  app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password]
      );
  
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while creating the user' });
    }
  });

app.listen(4000, () => {
    console.log(`Server is listening on port 4000`);
  });