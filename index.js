const express = require('express');
const app = express();
const port = 8000;

const {readdirSync} = require('fs');

readdirSync("./routes").map((file)=>app.use("/",require("./routes/"+file)))

app.get('/', (req, res) => {
  res.send('Main page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})