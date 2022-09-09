const pgtools = require("pgtools");
const { Pool } = require('pg');
const { config } = require('./dbConfig');

// This is main db name. Created on server creation, but just to make sure we are going to create it on server start,
// if it's not already
if (process.env.DB_ENVIRONMENT === "development") {
    const PG_NAME = "postgres";

    pgtools.createdb(config, PG_NAME, function (err, _res) {
        if (err) {
            console.log(`Database with name ${PG_NAME} already exists.`);
        }
    });
}

// Making a connection after creating database to be sure we can connect to something
const pool = new Pool(config);

// NOTE: If DB reset is needed
// const dropws = `DROP TABLE "workspace";`;
// const droptable = `DROP TABLE "table_group";`;
// const dropview = `DROP TABLE "view";`;

const workspace_table = `
   CREATE TABLE IF NOT EXISTS "workspace" (
      "id" SERIAL,
      "data" json NOT NULL,
      PRIMARY KEY ("id")
   );`;

const table_table = `
   CREATE TABLE IF NOT EXISTS "table_group" (
      "id" SERIAL,
      "workspace_id" INTEGER NOT NULL,
      "data" json NOT NULL,
      PRIMARY KEY ("id")
   );`;

const view_table = `
   CREATE TABLE IF NOT EXISTS "view" (
      "id" SERIAL,
      "table_id" INTEGER NOT NULL,
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

// NOTE: This executes table drop sql statements
// execute(dropws).then(result => {
//     if (result) {
//         console.log('Workspace table droped');
//     }
// });
// execute(droptable).then(result => {
//     if (result) {
//         console.log('Table group table droped');
//     }
// });
// execute(dropview).then(result => {
//     if (result) {
//         console.log('View table droped');
//     }
// });


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