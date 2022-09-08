const pgtools = require("pgtools");
const { Pool } = require('pg');
const config = require('./dbConfig');

const PG_NAME = "table_manager";

pgtools.createdb(config, PG_NAME, function (err, _res) {
    if (err) {
        console.log(`Database with name ${PG_NAME} already exists.`);
    }
});

// Making a connection after creating database to be sure we can connect to something
const pool = new Pool(config);

const workspace_table = `
   CREATE TABLE IF NOT EXISTS "workspace" (
      "id" SERIAL,
      "data" json NOT NULL,
      PRIMARY KEY ("id")
   );`;

const table_table = `
   CREATE TABLE IF NOT EXISTS "table_group" (
      "id" SERIAL,
      "data" json NOT NULL,
      PRIMARY KEY ("id")
   );`;

const view_table = `
   CREATE TABLE IF NOT EXISTS "view" (
      "id" SERIAL,
      "data" json NOT NULL,
      PRIMARY KEY ("id")
   );`;

//    SAFE TO DELETE - Only for querying tables
// const all_tables = "SELECT table_name FROM information_schema.tables";
// pool.query(all_tables, (err, res) => {
//     console.log("TABLES >> ", res);
//     console.log("ERROR >> ", err);
// });

const execute = async (query) => {
    try {
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};



execute(workspace_table).then(result => {
    if (result) {
        console.log('Workspace table created');
    }
});

execute(table_table).then(result => {
    if (result) {
        console.log('Table_group table created');
    }
});

execute(view_table).then(result => {
    if (result) {
        console.log('View table created');
    }
});

pool.end();