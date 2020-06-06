
const listCard = require('../../cards/common/listCard')
const detailCard = require('../../cards/common/detailCard')
const config = require('../../utility/config')
const serviceList = require('../../cards/common/serviceList1')
const timeOut = require('../../utility/timeout')
const receiveablesData = require('../../data/database/accountManager/receivablesData')


function receiveablesMain() {
    async function receiveablesList(req, res, globalVar) {
        try {
            var text;
            // console.log(accountId)
            let result = await receiveablesData.getreceiveablesData(globalVar[`${req.body.user.email}`].accountId)
            if ((result.length > 0) && (result !== config.errorMessage)) {
                return res.send(await listCard.itemListCard(result, config.logoToDisplay[0],
                    config.cardTitle.receiveablesListCard, config.listCardAction.receiveables, config.accountManagerServiceList))
            } else {
                text = "No Receivables found, Please try again!";
                return res.send({ text });

            }

        } catch (error) {
            console.error(error);
            text = "Error occured while showing Receivables List, Please try again!";
            return res.send({ text });

        }

    }
    async function receiveablesDetail(req, res) {
        try {
            var errorMessage;
            let result = await receiveablesData.getreceiveablesData(req.body.action.parameters[0].value)
            if ((result.length > 0) && (result !== config.errorMessage)) {
                return res.send(await detailCard.detailCard(result[0], config.receiveablesDetailCard, 'receiveables', config.logoToDisplay[0],
                    config.cardTitle.receiveablesDetailCard, config.accountManagerServiceList))

            } else {
                errorMessage = "No Receiveable found with given details. Here are some Receivables you might want to see!";
                return res.send({ errorMessage });
            }
        } catch (error) {
            console.error(error);
            errorMessage = "Error occured while showing Receivables Detail, Please try again!";
            return res.send({ errorMessage });
        }
    }
    return {
        receiveablesList,
        receiveablesDetail
    }
}

module.exports = receiveablesMain;
