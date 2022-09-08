const wsQuery = require('../queries/workspaceQuery');
const viewQuery = require('../queries/viewQuery');
const tableQuery = require('../queries/tableQuery');

const createWorkspace = async (request, response) => {
    const {tableTitle, viewTitle, ...otherProps} = request.body;

    try {
        const workspace = await wsQuery.createWorkspace(otherProps);
        const table = await tableQuery.createTable(tableTitle, viewTitle, workspace.id);
        await viewQuery.createView(viewTitle, table.id);

        response.status(200).json({id: workspace.id, ...workspace.data})
    } catch (err) {
        response.status(400).json(err);
    }
};

const createTable = async (request, response) => {
    const {workspaceId, title, viewTitle, } = request.body;

    try {
        const table = await tableQuery.createTable(title, viewTitle, workspaceId);
        await viewQuery.createView(viewTitle, table.id);

        response.status(200).json({id: table.id, ...table.data})
    } catch (err) {
        response.status(400).json(err);
    }
};

const createView = async (request, response) => {
    const {tableId, title, } = request.body;

    try {
        const view = await viewQuery.createView(title, tableId);

        response.status(200).json({id: view.id})
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    createWorkspace,
    createTable,
    createView
}