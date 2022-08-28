const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/workspace', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "workspace.json", 'utf8', function (err, data) {
    const workspace = JSON.parse( data );
    console.log( workspace );
    res.end( JSON.stringify(workspace));
 });
})

app.get('/view', function (req, res) {
    const idNotParsed = req.query.id;
    const id = parseInt(req.query.id);
   //  console.log("PARAM ID >> ", id);
   //  console.log("PARAM ID >> ", idNotParsed, " - TYPE: ", typeof idNotParsed);
    // First read existing users.
    fs.readFile( __dirname + "/" + "view.json", 'utf8', function (err, data) {
     const vew = JSON.parse( data );
     res.end( JSON.stringify(vew));
  });
 })

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})