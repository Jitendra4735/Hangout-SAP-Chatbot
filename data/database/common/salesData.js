const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

async function getSalesData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(` SELECT top 10 [CustomerId]
            ,[OrderDate] as date
            ,[OrderNo] as id
            ,[Description]
            ,[QUANTITY]
            ,[UnitPrice]
            ,[UnitCost]
            ,[SalesAmount] as Amount
            ,[Currency]
            ,[Account]
            ,[Status]
            ,[DeliveryDate]
            FROM [BI_CONTENT].[vwSalesOrder] 
            where [CustomerId] = IIF(@idTofetchData IS NULL, [CustomerId], @idTofetchData ) or [OrderNo] = @idTofetchData
            order by cast([OrderDate] as date) desc`, function (error, recordset) {
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

async function getSalesCurrentPeriod() {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.query(` SELECT top 10 [CustomerId]
            ,[OrderDate] as date
            ,[OrderNo] as id
            ,[Description]
            ,[QUANTITY]
            ,[UnitPrice]
            ,[UnitCost]
            ,[SalesAmount] as Amount
            ,[Currency]
            ,[Account]
            ,[Status]
            ,[DeliveryDate]
            FROM [BI_CONTENT].[vwSalesOrder]  where Month(cast(OrderDate as date))=Month(getdate())
            order by cast([OrderDate] as date) desc`, function (error, recordset) {
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

module.exports = { getSalesData, getSalesCurrentPeriod }