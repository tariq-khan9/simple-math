const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
    console.log(req.body)
    res.send('This is a GET request to /api' + req.body);
  });

app.listen(4000, () => {
    console.log(`Server is listening on port 4000`);
  });