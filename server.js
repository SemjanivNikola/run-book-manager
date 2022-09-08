const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/prepareDB');

const handler = require('./middleware/handler');

const wsQuery = require('./queries/workspaceQuery');
const viewQuery = require('./queries/viewQuery');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
     extended: true
   })
 );
app.use(cors());

app.get('/', (_req, res) => {
   res.send('Node.js, Express, and Postgres API')
});

app.post('/workspace', handler.createWorkspace);
app.get('/workspace', handler.readWorkspaceList);
app.get('/workspace/:id', handler.readWorkspaceByID);
app.delete('/worspace/:id', wsQuery.deleteWorkspace); //TODO:

app.post('/table', handler.createTable);

app.post('/view', handler.createView);
app.get('/view/:id', viewQuery.readViewByID); //TODO:
app.delete('/view/:id', viewQuery.deleteView); //TODO:

app.get('/viewtest', function (req, res) {
   const idNotParsed = req.query.id;
   const id = parseInt(req.query.id);
   //  console.log("PARAM ID >> ", id);
   //  console.log("PARAM ID >> ", idNotParsed, " - TYPE: ", typeof idNotParsed);
   // First read existing users.
   fs.readFile(__dirname + "/" + "view.json", 'utf8', function (err, data) {
      const vew = JSON.parse(data);
      res.end(JSON.stringify(vew));
   });
});

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`);
});