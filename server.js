const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const cors = require('cors');

// require('./database/prepareDB');

// const handler = require('./middleware/handler');
const runbookHandler = require('./middleware/runbookHandler');
// const viewQuery = require('./queries/viewQuery');

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

// app.post('/workspace', handler.createWorkspace);
// app.get('/workspace', handler.readWorkspaceList);
// app.get('/workspace/:id', handler.readWorkspaceByID);
// app.delete('/workspace/:id', handler.deleteWorkspace);

// app.post('/table', handler.createTable);

// app.post('/view', handler.createView);
// app.get('/view/:id', handler.readViewByID);
// app.delete('/view/:id', viewQuery.deleteView); //TODO:

app.get('/process', runbookHandler.readList);
app.get('/process/:id', runbookHandler.readProcessByID);
app.get('/process/action/:id', runbookHandler.readActionByID);

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`);
});