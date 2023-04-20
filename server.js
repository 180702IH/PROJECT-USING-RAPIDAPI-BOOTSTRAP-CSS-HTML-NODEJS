const express = require('express')
var axios = require("axios").default;
const path = require('path');
const app = express()
const port = 3000
app.get('/', (req, res) => {
    console.log(path.join(__dirname,'public'))
    return res.sendFile('public/index.html',{root:__dirname})
 })
app.get('/searchword', (req, res) => {
    // res.send('HEllo World Ishan')
    console.log(req.query)
    var options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: req.query.entry },
        headers: {
            'X-RapidAPI-Key': 'e6723d4367msh3338a2abdcbd04cp1bf904jsn70b0d94c3d94',
            'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
      res.json(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    // let response = {}
    // response.data = {
    //     entry: 'environment',
    //     request: 'environment',
    //     response: 'environment',
    //     assoc_word: ['condition', 'nature', 'setting'],
    //     assoc_word_ex: ['condition', 'nature', 'setting', 'surroundings'],
    //     version: '7.5.3',
    //     author: 'twinword inc.',
    //     email: 'help@twinword.com',
    //     result_code: '200',
    //     result_msg: 'Success'
    // }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`)
})