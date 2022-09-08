const { queryOne, queryAll } = require('./query');

// NOTE: $1 is placeholder for value that postgresql use natively instead of '?'
const createWorkspace = (body) => {
    const data = [{ selected_table_id: 1, ...body }];
    const sql = 'INSERT INTO workspace (data) VALUES ($1) RETURNING *';

    return queryOne(sql, data);
};

// TODO:
const deleteWorkspace = (request, response) => {
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

const readWorkspaceList = () => {
    const sql = 'SELECT * FROM workspace ORDER BY id ASC';
    
    return queryAll(sql);
};

const readWorkspaceByID = (id) => {
    const sql = 'SELECT * FROM workspace WHERE id = $1';
    const data = [id];

    return queryOne(sql, data);
};

module.exports = {
    createWorkspace,
    deleteWorkspace,
    readWorkspaceList,
    readWorkspaceByID,
}



