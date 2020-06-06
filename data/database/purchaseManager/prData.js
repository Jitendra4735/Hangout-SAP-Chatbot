const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

async function getPRData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(`SELECT top 10  [CreateDate] as date
            ,[PrNumber] as id
            ,[Description]
            ,[Quantity]
            ,[UnitPrice]
            ,[Price] as Amount
            ,[PrStatus] as Status
            FROM [BI_CONTENT].[vwPurchaseRequisition] where [PrNumber] = IIF(@idTofetchData IS NULL, [PrNumber], @idTofetchData)
            order by cast([CreateDate] as date) desc`, function (error, recordset) {
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

module.exports = { getPRData }