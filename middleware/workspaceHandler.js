const wsQuery = require('../queries/workspaceQuery');
const viewQuery = require('../queries/viewQuery');
const tableQuery = require('../queries/tableQuery');

const create = async (request, response) => {
    const {tableTitle, viewTitle, ...otherProps} = request.body;
    console.log("Trying to create ws")
    try {
        const workspace = await wsQuery.createWorkspace(otherProps);
        console.log("Workspace >> ", workspace);
        
        const table = await tableQuery.createTable(tableTitle, viewTitle, workspace.id);
        console.log("table >> ", table);
        
        const view = await viewQuery.createView(viewTitle, table.id);
        console.log("view >> ", view);

        response.status(200).json({id: workspace.id, ...workspace.data})
    } catch (err) {
        response.status(400).json(err);
    }
}

module.exports = {
    create,
}