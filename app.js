const express = require('express')
const app = express()
const port = process.env.PORT || 80;

const fetch = require('node-fetch');
let settings = { method: "Get" };
const url = "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"

app.get('/', function (req, res) {
	fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
		res.send(json)
    });
	
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))