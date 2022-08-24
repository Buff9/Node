const express = require('express')
const {response} = require("express");

const app = express();

app.get('/users',(req, res) => {

    res.json([
        {
            name: 'Leanne Graham',
            age: 23},
        {
            name: 'Ervin Howell',
            age: 25
        }
    ])
});
app.listen(5000, () => {
    console.log('5000')
})