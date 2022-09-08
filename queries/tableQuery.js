const { queryOne, queryAll } = require('./query');

const createTable = (title, viewTitle, workspace) => {
    const data = [workspace, { title, view_list: [{ id: 1, title: viewTitle }], selected_view_id: 1 }];
    const sql = 'INSERT INTO table_group (workspace_id, data) VALUES ($1, $2) RETURNING *';

    return queryOne(sql, data);
};

// TODO:
const deleteView = (request, response) => {
    const id = parseInt(request.params.id);

    client.query('DELETE FROM view WHERE id=$1', [id], (error, results) => {
        client.end();
        if (error) {
            throw error
        }

        response.status(200).json(results.rows);
    });
};

const readWorkspaceTableList = (id) => {
    const data = [id];
    const sql = 'SELECT * FROM table_group WHERE workspace_id = $1 ORDER BY id ASC';

    return queryAll(sql, data);
};

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
    readWorkspaceTableList
}



