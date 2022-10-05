const activeList = require('../dummy-data/activeProcessList.json')
const availableList = require('../dummy-data/availableProcessList.json')
const archiveList = require('../dummy-data/archiveProcessList.json')
const processItem = require('../dummy-data/process.json')

/*************************************/
/**         READ OPERATIONS         */
/***********************************/

/**
 * @desc get all user processes by default. If query params are present, query by them
 * @query *none/active* - default, return list by active status
 * @query *available* - return list by available status
 * @query *archive* - return list by archive status
 */
const readList = async (request, response) => {
    const status = request.query.status

    try {
        if (status === "available") {
            response.status(200).json(availableList);
        } else if (status === "archive") {
            response.status(200).json(archiveList);
        } else {
            response.status(200).json(activeList);
        }
    } catch (err) {
        response.status(400).json(err);
    }
};

const readProcessByID = async (_request, response) => {
    try {
        response.status(200).json(processItem);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    readList,
    readProcessByID
}