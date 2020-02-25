const express = require('express')
const app = express()
const port = process.env.PORT || 80;

const fetch = require('node-fetch');
let settings = { method: "Get" };
const url = "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON"
const header1 = "<h1><u>Geforce Now Game List</u></h1>"
const header2 = `
<h3>This is a table directly from the current Nvidia's 
	<a href="' + url + '"> JSON data here.</a> 
	<a href="https://github.com/lettuceboop/geforce-now-gameslist">The code for this project is open source here.</a>
</h3>`
app.get('/', function (req, res) {
	fetch(url, settings)
    .then(res => res.json())
    .then((json) => {

		res.send(header1 + header2 + json2table(json, 'table'))
		
    });
	
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


function json2table(json, classes) {
  var cols = Object.keys(json[0]);
  
  var headerRow = '';
  var bodyRows = '';
  
  classes = classes || '';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  cols.map(function(col) {
    headerRow += '<th>' + capitalizeFirstLetter(col) + '</th>';
  });

  json.map(function(row) {
    bodyRows += '<tr>';

    cols.map(function(colName) {
      bodyRows += '<td>' + row[colName] + '</td>';
    })

    bodyRows += '</tr>';
  });

  return '<table class="' +
         classes +
         '"><thead><tr>' +
         headerRow +
         '</tr></thead><tbody>' +
         bodyRows +
         '</tbody></table>';
}


