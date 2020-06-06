const { SalesForceConnection } = require('./connection');

async function CreateOpportunity(opportunityName, amount, closeDate, opportunityStage,
    opportunityType, leadSource, accountId) {
    return new Promise((resolve, reject) => {
        try {
            var uiResponse
            SalesForceConnection.sobject("Opportunity").create({
                Name: opportunityName,
                LeadSource: leadSource,
                CloseDate: closeDate,
                StageName: opportunityStage,
                Amount: amount,
                AccountId: accountId,
                Type: opportunityType
            }, function (err, ret) {
                var uiResponse = '';
                if (err || !ret.success) {
                    console.error(err);
                    uiResponse = { "replyCode": 'error', 'message': err }
                    reject(uiResponse)
                } else {
                    uiResponse = {
                        'replyCode': 'success',
                        'message': 'Working is fine',
                        'id': ret.id
                    }
                    resolve(uiResponse)
                }

            });
        }
        catch (error) {
            console.error(error)
            reject(error);
        }
    })
}

module.exports = CreateOpportunity;