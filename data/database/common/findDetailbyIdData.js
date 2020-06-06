const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

module.exports.detailIdfunction = (idToFetch) => {
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.input('idToFetch', sql.VarChar, idToFetch);
        request.execute('BI_Content.searchBYId', function (error, recordset) {
            if (error) {
                console.error(error);
                reject(errorMessage)
            }
            else {
                resolve(recordset.recordset);
            }
        });
    })
}