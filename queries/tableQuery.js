const { table } = require('console');
const { queryOne, queryAll } = require('./query');

const createTable = (title, workspace) => {
    const data = [workspace, { title, view_list: [], selected_view_id: null }];
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

const updateRow = (id, value) => {
    const data = [value, id];
    const sql = 'UPDATE table_group SET selected_view_id = $1 WHERE id = $2';

    return queryOne(sql, data);
};

const updateViewList = async (id, value) => {
    let data = [id];
    let sql = `SELECT data FROM table_group WHERE id = $1`;
    const res = await queryOne(sql, data);
    
    res.data.view_list.push({id: value[0], title: value[1]});
    res.data.selected_view_id = value[0];

    data = [res.data, id];
    sql = `UPDATE table_group SET data = $1 WHERE id = $2 RETURNING *`;

    return queryOne(sql, data);
};

const deletetableByID = (id) => {
    const sql = 'DELETE FROM table_group WHERE id = $1';
    const data = [id];

    return queryOne(sql, data);
};

const updatetableByID = (id, title) => {
    var x = title;
    console.log(x);
    const sql = `UPDATE table_group SET data = jsonb_set(data, '{title}', '$2') WHERE id='$1'`;
    const data = [id, title];

   


    return queryOne(sql, data);
};

module.exports = {
    createTable,
    readWorkspaceTableList,
    updateRow,
    updateViewList,
    deletetableByID,
    updatetableByID
}



