const sql = require('mssql')
const errorMessage = require('../../../utility/config')
async function getreceiveablesData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(`SELECT top 10 [CustomerId]
            ,[BillingYear]
            ,[DocNumber] as id
            ,[PostingDate]
            ,[DocumentDate] as date
            ,[EntryDate]
            ,[Currency]
            ,[DocRefNumber]
            ,[BillingPeriod]
            ,[AmtInLocalCurr]
            ,[Amount]
            ,[ItemText] as Description
            ,[OrderNumber]
            ,[Account],
            '' as Status
            FROM [BI_CONTENT].[vwReceivable] 
            where [CustomerId] = IIF(@idTofetchData IS NULL, [CustomerId], @idTofetchData ) 
            or [DocNumber] = @idTofetchData 
            order by cast([DocumentDate] as date) desc`, function (error, recordset) {
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

module.exports = { getreceiveablesData }