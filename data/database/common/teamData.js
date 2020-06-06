var sql = require('mssql')

async function getTeamData(departmentName) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            request.input('departmentName', sql.VarChar, departmentName);
            request.query(`SELECT  [EmpId]
            ,[FirstName]
            ,[LastName]
            ,[Department]
            ,[BusinessRole]
            ,[ProfilePhoto]
            ,[IsManager]
            ,[ManagerId]
            ,[Compliance]
            ,[SpendThisMonth]
            ,[TotalSpend]
            ,[TargetThisMonth]
            ,[CurrentPeriod]
            ,[SalesVsTarget]
            ,[SalesYtd]
            ,[Pipeline]
            ,[WinRate]
            ,[AverageDealSize]
            ,[Email] 
            FROM [BI_CONTENT].[vEmployee] where [Department] = @departmentName`, function (error, recordset) {
                if (error) {
                    console.error(error);
                    reject("error occured")
                }
                else {
                    resolve(recordset.recordset);
                }
            });
        } catch (error) {
            console.error(error);
            reject("error occured")
        }
    })
}

module.exports = { getTeamData }