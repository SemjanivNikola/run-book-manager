const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./database/prepareDB');

const wsQuery = require('./queries/workspace_query');
const viewQuery = require('./queries/view_query');

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

app.post('/workspace', wsQuery.createWorkspace);
app.get('/workspace', wsQuery.readWorkspaceList);
app.get('/workspace/:id', wsQuery.readWorspaceByID);
app.delete('/worspace/:id', wsQuery.deleteWorkspace);

app.post('/view', viewQuery.createView);
app.get('/view/:id', viewQuery.readViewByID);
app.delete('/view/:id', viewQuery.deleteView);

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`);
});