const express = require('express');
let app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send("Home");
})

app.get('/api1', (req, res) => {
    res.send("API-1");
})

app.get('/api2', (req, res) => {
    res.send("API-2");
})

app.get('/api3', (req, res) => {
    res.send("API-3");
})

var server = app.listen(port, () => {
    console.log("Server Starter "+server.address().address);
})
