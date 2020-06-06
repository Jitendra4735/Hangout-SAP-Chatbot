const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

async function getPOData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(`SELECT top 10 [PoDate] as date
            ,[PoNumber] as id
            ,[Description]
            ,[UnitPrice]
            ,[Quantity]
            ,[Unit]
            ,[Price] as Amount
            ,[Meterial]
            ,[PoStatus] as Status
            FROM [BI_CONTENT].[vwPurchaseOrder] where [PoNumber] = IIF(@idTofetchData IS NULL, [PoNumber], @idTofetchData )
            order by cast([PoDate] as date) desc`, function (error, recordset) {
                if (error) {
                    console.error(error);
                    reject(errorMessage)
                }
                else {
                    resolve(recordset.recordset);
                }
            });
        } catch (error) {
            console.error(error);
            reject(errorMessage)
        }
    })

}

module.exports = { getPOData }