const sql = require('mssql')
const errorMessage = require('../../../utility/config').errorMessage

async function getOpportunityData(idTofetchData) {
    return new Promise((resolve, reject) => {
        try {
            var request = new sql.Request();
            // idTofetchData = '0060o00001R9wy5AAB'
            request.input('idTofetchData', sql.VarChar, idTofetchData);
            request.query(`SELECT top 10 [OpportunityId] as id
            ,[CustomerId]
            ,[AccountName]
            ,[Stage]
            ,[Description]
            ,[Status]
            ,[Amount]
            ,[Actual_Revenue]
            ,[Est__Revenue]
            ,CloseDate as date      
            ,[Probability]
            ,[Rating] FROM BI_CONTENT.vwOpportunity
            where ([CustomerId] = IIF(@idTofetchData IS NULL, [CustomerId], @idTofetchData ) or 
            [OpportunityId] = @idTofetchData)
            and [Status] in('Open','Won','New')
            and (cast(CloseDate as date) > '2020-01-01') AND (cast(CloseDate as date) < '2020-07-31')
            order by cast(CloseDate as date) desc`, function (error, recordset) {
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

async function createOpportunity(opportunityName, amount, closeDate, opportunityStage,
    opportunityType, leadSource, accountname, accountID, oppId) {
    return new Promise((resolve, reject) => {
        var request = new sql.Request();
        request.input('OpportunityName', sql.VarChar, opportunityName);
        request.input('Amount', sql.Money, amount);
        request.input('CloseDate', sql.VarChar, closeDate);
        request.input('OpportunityStage', sql.VarChar, opportunityStage);
        request.input('OpportunityType', sql.VarChar, opportunityType);
        request.input('LeadSource', sql.VarChar, leadSource);
        request.input('accountName', sql.VarChar, accountname);
        request.input('customerId', sql.VarChar, accountID);
        request.input('opportunityId', sql.VarChar, oppId);
        request.execute('BI_CONTENT.CreateOpportunity', function (error, recordset) {
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


module.exports = { getOpportunityData, createOpportunity }