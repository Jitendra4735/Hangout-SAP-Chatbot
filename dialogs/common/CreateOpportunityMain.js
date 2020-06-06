const config = require('../../utility/config')
const serviceList = require('../../cards/common/serviceList')
const timeOut = require('../../utility/timeout')
const customerData = require('../../data/database/customerProfile/CustomerData')
const accountList = require('../../cards/accountManager/accountList');
const createOpportunityCard = require('../../cards/common/createOpportunityCard')
const createOpportunityApi = require('../../data/salesforce/createOpportunityApi')
const opportunityData = require('../../data/database/common/opportunityData')
const createOpportunityAskQuestion = require('../../cards/common/createOpportunityAskQuestion')
const submitOpportunityDetails = require('../../cards/common/submitOpportunityDetails')
const personaCard = require('../../cards/personaCard')

function createOpportunityMain() {

    async function createOpportunityWaterfallStep1(req, res,globalVar) {
        globalVar[`${req.body.user.email}`].storedOpportunityQuestion = -1;
        globalVar[`${req.body.user.email}`].CreateOpportunityQA = {};
        globalVar[`${req.body.user.email}`].CustomerId = 0;
        try {
            var customerListData = await customerData.getCustomerData(process.env.accountManagerId);
            if ((customerListData.length > 0) && (customerListData !== "")) {
                res.send(await accountList.customerListCard(customerListData, config.cardTitle.createOpportunityAccountList));
            } else {
                return res.send("No Accounts found, Please try again!")
            }
        }
        catch (error) {
            console.error(error);
            return res.send("Error occured while showing Account List to Create Opportunity, Please try again!")
        }
    }
    async function createOpportunityWaterfallStep2(req, res, globalVar) {
        var a = (globalVar[`${req.body.user.email}`]['storedOpportunityQuestion'])
        try {
            let accountDetails = {}
            switch (config.createOpportunityQuestion[a]) {

                case config.createOpportunityQuestion[0]:
                    var text = `Please enter ${config.createOpportunityQuestion[1]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    //return res.json({text})
                break;

                case config.createOpportunityQuestion[1]:
                    var text = `Please enter ${config.createOpportunityQuestion[2]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    break;

                case config.createOpportunityQuestion[2]:
                    var text = `Please enter ${config.createOpportunityQuestion[3]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    break;
                case config.createOpportunityQuestion[3]:
                    var text = `Please enter ${config.createOpportunityQuestion[4]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    break;
                case config.createOpportunityQuestion[4]:
                    var text = `Please enter ${config.createOpportunityQuestion[5]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    break;
                case config.createOpportunityQuestion[5]:
                    var text = `Please enter ${config.createOpportunityQuestion[6]}`
                    return res.send(createOpportunityAskQuestion.askQuestion(text))
                    break;
                case config.createOpportunityQuestion[6]:
                   return res.send(submitOpportunityDetails.submitOpportunity())

                    break;
                case config.createOpportunityQuestion[7]:
                    {
                    var sfId = 'test';
                    var accountId = globalVar[`${req.body.user.email}`].CustomerId
                    var accountName ;
                    if (accountId === "0000000051") {
                        accountName = "Contoso Manufacturing"
                        sfId = '0010o00002gY2YH'
                    } else {
                        accountName = "Contoso Retail"
                        sfId = '0010o00002apCVa'
                        
                    }
                    var opportunityName = globalVar[`${req.body.user.email}`].CreateOpportunityQA.OpportunityName ;
                    var amount =  globalVar[`${req.body.user.email}`].CreateOpportunityQA.Amount
                    var closeDate = globalVar[`${req.body.user.email}`].CreateOpportunityQA.CloseDate
                    var opportunityStage = globalVar[`${req.body.user.email}`].CreateOpportunityQA.OpportunityStage
                    var opportunityType =globalVar[`${req.body.user.email}`].CreateOpportunityQA.OpportunityType
                    var leadSource = globalVar[`${req.body.user.email}`].CreateOpportunityQA.LeadSource
                    await createOpportunityApi(opportunityName,amount,closeDate,opportunityStage,opportunityType,
                        leadSource,sfId).then(async result => {// hardcoded salesforce account id to contoso retail
                            opportunityData.createOpportunity(opportunityName,amount,closeDate,opportunityStage,
                                opportunityType, leadSource,accountName,accountId ,result.id)                    

                            });
                        }
                        var text = `Opportunity created sucessfully.Press any key to continue`
                        return res.send(createOpportunityAskQuestion.askQuestion(text))

            }
        }
         catch (error) {
            console.error(error);
            res.send("Error occured while showing Create Opportunity card, Please try again!")
        }
    }
    
    return {
        createOpportunityWaterfallStep1,
        createOpportunityWaterfallStep2
    }
}


module.exports = createOpportunityMain