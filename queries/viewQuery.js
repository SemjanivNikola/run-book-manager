const { queryOne, queryAll } = require('./query');

const createView = (title, tableId) => {
    const data = [tableId, {
        title,
        header: [
            {
                id: 1,
                type: "text",
                fieldType: 1,
                text: "Name",
                isShown: true
            },
            {
                id: 2,
                type: "text",
                fieldType: 1,
                text: "Description",
                isShown: true
            },
            {
                id: 3,
                type: "status",
                fieldType: 4,
                text: "Status",
                isShown: true
            },
        ],
        body: [
            [{ value: 1, isShown: true }, { value: "", type: 1 }, { value: "", type: 1 }, { value: "", type: 4 }],
            [{ value: 1, isShown: true }, { value: "", type: 1 }, { value: "", type: 1 }, { value: "", type: 4 }],
            [{ value: 1, isShown: true }, { value: "", type: 1 }, { value: "", type: 1 }, { value: "", type: 4 }]
        ],
        options: {
            hidden: 0,
            sort: [],
            filter: [],
            summary: []
        }
    }]
    const sql = 'INSERT INTO view (table_id, data) VALUES ($1, $2) RETURNING *';

    return queryOne(sql, data);
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

const readViewByID = (id) => {
    const sql = 'SELECT * FROM view WHERE id = $1';
    const data = [id];

    return queryOne(sql, data);
};

module.exports = {
    createView,
    deleteView,
    readViewByID,
}



