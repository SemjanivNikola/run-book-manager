const { query } = require('./query');

const createWorkspace = (body) => {
    const data = [{ selected_table_id: null, ...body }];
    const sql = 'INSERT INTO workspace (data) VALUES ($1) RETURNING *';

    return query(sql, data);
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



