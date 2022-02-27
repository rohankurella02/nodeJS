const express = require('express');
let app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/api1', (req, res) => {
    res.send("API-1");
})

app.get('/api2', (req, res) => {
    res.send("API-2");
})

var server = app.listen(port, () => {
    console.log(server.address().address);
})