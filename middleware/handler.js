const wsQuery = require('../queries/workspaceQuery');
const viewQuery = require('../queries/viewQuery');
const tableQuery = require('../queries/tableQuery');

/**************************************/
/**         WRITE OPERATIONS         */
/************************************/

const createWorkspace = async (request, response) => {
    const {tableTitle, viewTitle, ...otherProps} = request.body;

    try {
        const workspace = await wsQuery.createWorkspace(otherProps);
        const table = await tableQuery.createTable(tableTitle, workspace.id);
        const view = await viewQuery.createView(viewTitle, table.id);

        await tableQuery.updateViewList(table.id, [view.id, viewTitle]);

        response.status(200).json({id: workspace.id, ...workspace.data})
    } catch (err) {
        response.status(400).json(err);
    }
};

const createTable = async (request, response) => {
    const {workspaceId, title, viewTitle, } = request.body;

    try {
        const table = await tableQuery.createTable(title, workspaceId);
        const view = await viewQuery.createView(viewTitle, table.id);

        const updatedTable = await tableQuery.updateViewList(table.id, [view.id, viewTitle]);

        response.status(200).json({id: updatedTable.id, ...updatedTable.data})
    } catch (err) {
        response.status(400).json(err);
    }
};

const createView = async (request, response) => {
    const {tableId, title, } = request.body;

    try {
        const view = await viewQuery.createView(title, tableId);
        await tableQuery.updateViewList(tableId, [view.id, title]);

        response.status(200).json({id: view.id, title: view.data.title, tableId})
    } catch (err) {
        response.status(400).json(err);
    }
};

/*************************************/
/**         READ OPERATIONS         */
/***********************************/

const readWorkspaceList = async (_request, response) => {
    try {
        const list = await wsQuery.readWorkspaceList();
        const res = [];

        list.forEach((item) => {
            res.push({id: item.id, ...item.data});
        });

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};

const readWorkspaceByID = async (request, response) => {
    const id = parseInt(request.params.id);
    
    try {
        const ws = await wsQuery.readWorkspaceByID(id);
        const res = {id: ws.id, table_list: [], ...ws.data};
        
        const tableList = await tableQuery.readWorkspaceTableList(res.id);
        tableList.forEach((item) => {
            res.table_list.push({id: item.id, ...item.data});
        });

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};

const readViewByID = async (request, response) => {
    const id = parseInt(request.params.id);
    
    try {
        const view = await viewQuery.readViewByID(id);
        const res = {id: view.id, ...view.data};

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};

/*************************************/
/**       UPDATE OPERATIONS         */
/***********************************/

/*************************************/
/**       DELETE OPERATIONS         */
/***********************************/

const deleteWorkspace = async (request, response) => {
    const id = parseInt(request.params.id);
    
    try {
        const res = await wsQuery.deleteWorkspace(id);

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    createWorkspace,
    createTable,
    createView,
    readWorkspaceList,
    readWorkspaceByID,
    readViewByID,
    deleteWorkspace
}