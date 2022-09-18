const { queryOne, queryAll } = require('./query');

// NOTE: $1 is placeholder for value that postgresql use natively instead of '?'
const createWorkspace = (body) => {
    const data = [body];
    const sql = 'INSERT INTO workspace (data) VALUES ($1) RETURNING *';

    return queryOne(sql, data);
};

// TODO:
const deleteWorkspace2 = (request, response) => {
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


const deleteWorkspace = (id) => {
    const x = [id];
    const data = x[0].params.id;
    const sql = `DELETE FROM workspace WHERE id = ${data}`;
    
    console.log(sql);
    console.log(data);
    
    return queryOne(sql, data);
};

const readWorkspaceList = () => {
    const sql = 'SELECT * FROM workspace ORDER BY id ASC';
     
    return queryAll(sql);
};

const deleteWorkspaceByID = (id) => {
    const sql = 'DELETE FROM workspace WHERE id = $1';
    const data = [id];

    return queryOne(sql, data);
};

const readWorkspaceByID = (id) => {
    const sql = 'SELECT * FROM workspace WHERE id = $1';
    const data = [id];

    return queryOne(sql, data);
};

const updateRow = (id, value) => {
    const data = [value, id];
    const sql = 'UPDATE workspace SET selected_table_id = $1 WHERE id = $2';

    return queryOne(sql, data);
};

module.exports = {
    createWorkspace,
    deleteWorkspace,
    readWorkspaceList,
    readWorkspaceByID,
    updateRow,
    deleteWorkspaceByID
}



