const { Client } = require('pg');
const config = require('../database/dbConfig');

const createView = (request, response) => {
    const client = new Client(config);
    client.connect();

    const data = request.body;

    console.log("Data >> ", data);

    client.query('INSERT INTO view (data) VALUES ($1) RETURNING *', [data], (error, results) => {
        client.end();
        if (error) {
            throw error
        }

        response.status(201).send(results);
    })
};

// TODO:
const deleteView = (request, response) => {
    const client = new Client(config);
    client.connect();

    const id = parseInt(request.params.id);

    client.query('DELETE FROM view WHERE id=$1', [id], (error, results) => {
        client.end();
        if (error) {
            throw error
        }

        response.status(200).json(results.rows);
    });
};

// NOTE: $1 is placeholder for value that postgresql use natively instead of '?'
const readViewByID = (request, response) => {
    const client = new Client(config);
    client.connect();

    const id = parseInt(request.params.id);

    client.query('SELECT * FROM view WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }

    });
};

module.exports = {
    createView,
    deleteView,
    readViewByID,
}



