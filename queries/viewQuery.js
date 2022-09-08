const { query } = require('./query');

const createView = (title, tableId) => {
    const data = [{
        title,
        table: tableId,
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
    const sql = 'INSERT INTO view (data) VALUES ($1) RETURNING *';

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
    createView,
    deleteView,
    readViewByID,
}



