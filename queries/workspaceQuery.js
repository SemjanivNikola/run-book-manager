const { queryOne, queryAll } = require('./query');

// NOTE: $1 is placeholder for value that postgresql use natively instead of '?'
const createWorkspace = (body) => {
    const data = [body];
    const sql = 'INSERT INTO workspace (data) VALUES ($1) RETURNING *';

    return queryOne(sql, data);
};

const deleteWorkspace = (body) => {
    const data = [body];
    const sql = 'DELETE FROM workspace WHERE id = $1';

    return queryOne(sql, data);
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
    updateRow
}



