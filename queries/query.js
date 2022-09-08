const { Client } = require('pg');
const config = require('../database/dbConfig');

const query = async (sql, values) => {
    const client = new Client(config);
    client.connect();

    return client.query(sql, values).then(res => {
        return res.rows[0];
    }).catch(err => {
        console.warn("Error in workspace create > ", err);
        throw err;
    }).finally(() => {
        client.end();
    });
};

module.exports = {
    query
}