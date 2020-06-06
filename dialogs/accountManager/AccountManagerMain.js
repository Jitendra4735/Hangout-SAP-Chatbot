const accountList = require('../../cards/accountManager/accountList');
const accountProfile = require('../../cards/accountManager/accountProfile')
const config = require('../../utility/config')
const customerData = require('../../data/database/customerProfile/CustomerData')
const serviceList = require('../../cards/common/serviceList')
const timeOut = require('../../utility/timeout')
const userProfileApi = require('../../data/api/userProfile')
const personaCard = require('../../cards/personaCard')

function AccountManagerMain() {
    async function accountManagerWaterfallStep1(req, res) {
        console.log("called accountManagerWaterfallStep1");
        // showing account list 
        var errorMessage;
        try {
            var customerListData = await customerData.getCustomerData(process.env.accountManagerId);
            // checking if customer data is there or not
            if ((customerListData.length > 0) && (customerListData !== "")) {
                // displaying customer list
                let customerListCard = await accountList.customerListCard(customerListData, config.cardTitle.customerList);
                //let serviceList=serviceList.cardtoDisplay(config.accountManagerServiceList) 
                return res.send(customerListCard)
                //return res.send(serviceList)
            } else {
                errorMessage = "No Accounts found, Please try again!"
                return res.send(errorMessage);
            }
        } catch (error) {
            console.error(error);
            errorMessage = "Error occured while showing Account List, Please try again!";
            return res.send(errorMessage);
        }

    }
    async function accountManagerWaterfallStep2(req, res, globalVar) {
        // showing account profile
        try {
            console.log('called accountManagerWaterfallStep2')
            // checking if required data is there or not to show profile
            var text;
            if (req.body.action.actionMethodName === config.accountListAction) {
                globalVar[`${req.body.user.email}`].accountId = req.body.action.parameters[0].value
            }
            var dataForImage = await customerData.getCustomerProfileImageData(globalVar[`${req.body.user.email}`].accountId); // getting data to show profit and sales on user Profile
            var imageData = await userProfileApi.generateProfileImage(dataForImage);// getting images generated from above data
            var accountData = await customerData.getCustomerData(globalVar[`${req.body.user.email}`].accountId); // get account profile info
            if ((accountData.length > 0) && (dataForImage.length > 0)) {
                var result = await accountProfile.accountProfile(accountData, imageData, config.accountManagerServiceList); // generating card
                return res.send(result);
            } else {
                text = "No Accounts found with given details. Here are some accounts you might want to try!";
                return res.send({ text });
            }
        } catch (error) {
            console.error(error);
            text = "Error occured while showing Account Details. Please try again!";
            return res.send({ text });
        }
    }
    return {
        accountManagerWaterfallStep1,
        accountManagerWaterfallStep2
    };

}
module.exports = AccountManagerMain;
