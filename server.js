const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

let staticPath = path.join(__dirname, "public");


const app = express();

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.use((req, res) =>{
    res.sendFile(path.join(staticPath, "404.html"));
})

app.listen(3000, () => {
    console.log('listensing on port 3000.......');
})