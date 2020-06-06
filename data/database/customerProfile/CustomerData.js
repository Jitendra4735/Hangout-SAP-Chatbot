const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage
async function getCustomerData(accountId) { //0000000001
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('accountId', sql.VarChar, accountId);
            request.query(`SELECT [CustomerId]
            ,[CustomerName]
            ,[AccountManagerEmpId]
            ,[AccountManager]
            ,[FirstName]
            ,[LastName]
            ,[CompanyWebite]
            ,[PersonName]
            ,[TelephoneNumber]
            ,[MobileNumber]
            ,[Email]
            ,[Country]
            ,[City]
            ,[BusinessAddress2]
            ,[PostalCode]
            ,[Logo]
            FROM BI_CONTENT.vCustomer where AccountManagerEmpId = @accountId or CustomerId = @accountId
            and logo is not null`, function (error, recordset) {
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

async function getCustomerProfileImageData(accountId) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('accountId', sql.VarChar, accountId);
            request.query(`SELECT 
            format(SUM([Amount] - [UnitCost]),'$0,K') AS GrossProfit,
            format(SUM([Amount]),'$0,K') AS  TotalSales FROM 
            [BI_CONTENT].[vwSalesOrder] WHERE 
            [CustomerID] = @accountId AND cast(OrderDate as date) > '2020-01-01'`, function (error, recordset) {
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

module.exports = { getCustomerData, getCustomerProfileImageData }