const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

async function getinvoiceData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(`SELECT top 10 [CustomerId]
            ,[InvoiceDate] as date
            ,[InvoiceNo] as id
            ,[Description]
            ,[Amount]
            ,[Status]
            ,[Account]
            ,[RefNo]
            FROM [BI_CONTENT].[vwInvoice] 
            where [CustomerId] = IIF(@idTofetchData IS NULL, [CustomerId], @idTofetchData ) or [InvoiceNo] = @idTofetchData
            order by cast([InvoiceDate] as date) desc`, function (error, recordset) {
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

module.exports = { getinvoiceData }