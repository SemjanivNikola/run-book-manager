const { query } = require('./query');

const createTable = (title, viewTitle, workspace) => {
    const data = [{ workspace, title, view_list: [{ id: 1, title: viewTitle }], selected_view_id: null }];
    const sql = 'INSERT INTO table_group (data) VALUES ($1) RETURNING *';

    return query(sql, data);
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
    createTable,
    deleteView,
    readViewByID,
}



