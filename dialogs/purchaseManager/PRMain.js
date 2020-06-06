
const listCard = require('../../cards/common/listCard')
const detailCard = require('../../cards/common/detailCard')
const config = require('../../utility/config')
const serviceList = require('../../cards/common/serviceList1')
const timeOut = require('../../utility/timeout')
const prData = require('../../data/database/purchaseManager/prData')


function prMain() {
    async function prWaterfallStep1(req, res) {
        try {
            let result = await prData.getPRData()
            if ((result.length > 0) && (result !== config.errorMessage)) {
                let cardToSend = await listCard.itemListCard(result, config.logoToDisplay[0],
                    config.cardTitle.prListCard, config.listCardAction.pr,config.purchaseManagerServiceList)
                return res.json(cardToSend)
            } else {
                text = "No Purchase Requisition found, Please try again!"
                return res.json({ text })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({ status: 400, message: config.errorMessage }).json();
        }
    }
    async function prWaterfallStep2(req, res) {
        try {
            let result = await prData.getPRData(req.body.action.parameters[0].value)
            if ((result.length > 0) && (result !== config.errorMessage)) {
                let cardToSend = await detailCard.detailCard(result[0], config.prDetailCard, 'pr',config.logoToDisplay[0], config.cardTitle.prDetailCard,config.purchaseManagerServiceList)
                return res.json(cardToSend)
            } else {
                text = "No Purchase Requisition found with given details. Here are some Purchase Requisition you might want to see!"
                return res.json({ text })

            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({ status: 400, message: config.errorMessage }).json();
        }
    }
    return {
        prWaterfallStep1,
        prWaterfallStep2
    }
}

module.exports = prMain