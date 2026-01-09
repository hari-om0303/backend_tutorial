const fs = require('fs')

const data = JSON.parse(fs.readFileSync('qouts.json', 'utf-8'));
const qouts = data.quotes;


const express = require('express');
const app = express();

app.use(express.json());

//GET method 
app.get('/qouts', (req, res) => {
    res.send(qouts);
})
app.get('/qouts/:id', (req, res) => {
    const id = +req.params.id;
    const singleqout = qouts.find(p => p.id === id);
    res.send(singleqout);
})

// create 
app.post('/qouts', (req, res) => {
    qouts.push(req.body);
    console.log(req.body);
    res.json(req.body);

})

// update
app.put('/qouts/:id', (req, res) => {
    const id = +req.params.id;
    const singleqout = qouts.findIndex(p => p.id === id);
    qouts.splice(singleqout, 1, req.body);
    res.json(req.body);
})

// patch
app.patch('/qouts/:id', (req, res) => {
    const id = +req.params.id;
    const singleqout = qouts.findIndex(p => p.id === id);
    const qout = qouts[singleqout];
    qouts.splice(singleqout, 1, { ...qout, ...req.body });
    res.json(req.body);
})

// delete
app.delete('/qouts/:id', (req, res) => {
    const id = +req.params.id;
    const singleqout = qouts.findIndex(p => p.id === id);
    const qout = qouts[singleqout];
    qouts.splice(singleqout);
    res.status(201).json(qout);
})

app.listen(3000, () => {
    console.log("server is running on port 3000");
})