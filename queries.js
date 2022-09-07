const { Client } = require('pg');
const config = require('./dbConfig');

const createWorkspace = (request, response) => {
    const client = new Client(config);
    client.connect();

    const data = request.body;

    console.log("Data >> ", data);

  client.query('INSERT INTO workspace (data) VALUES ($1) RETURNING *', [data], (error, results) => {
    client.end();
    if (error) {
      throw error
    }

    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
};

// TODO:
const deleteWorkspace = (request, response) => {
    const client = new Client(config);
    client.connect();

    const id = parseInt(request.params.id);

    client.query('DELETE FROM workspace WHERE id=$1', [id], (error, results) => {
        client.end();
        if (error) {
            throw error
        }
        console.log("RESULTS OF QUERY >> ", results);
        response.status(200).json(results.rows);
    });
};

const readWorkspaceList = (request, response) => {
    const client = new Client(config);
    client.connect();
    
    client.query('SELECT * FROM workspace ORDER BY id ASC', (error, results) => {
        client.end();
        if (error) {
            throw error
        }
        console.log("RESULTS OF QUERY >> ", results);
        response.status(200).json(results.rows);
    });
};

// NOTE: $1 is placeholder for value that postgresql use natively instead of '?'
const readWorspaceByID = (request, response) => {
    const client = new Client(config);
    client.connect();

    const id = parseInt(request.params.id);

    client.query('SELECT * FROM table WHERE workspace = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        setHelper(results)
    })

    client.query('SELECT * FROM workspace WHERE id = $1', [id], (error, w_results) => {
        if (error) {
            throw error
        }
        console.log('')
        client.query('SELECT * FROM table WHERE workspace = $1', [id], (error, t_results) => {
            if (error) {
                throw error
            }

            response.status(200).json(w_results.rows);
        });
    })
};

module.exports = {
    createWorkspace,
    deleteWorkspace,
    readWorkspaceList,
    readWorspaceByID,
  }



