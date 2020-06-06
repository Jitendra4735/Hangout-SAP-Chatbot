const listCard = require('../../cards/common/listCard')
const detailCard = require('../../cards/common/detailCard')
const config = require('../../utility/config')
const serviceList = require('../../cards/common/serviceList1')
const timeOut = require('../../utility/timeout')
const poData = require('../../data/database/purchaseManager/poData')
const personaCard = require('../../cards/personaCard')
function poMain() {

    async function poWaterfallStep1(req, res) {
        try {
            let result = await poData.getPOData()
            if ((result.length > 0) && (result !== config.errorMessage)) {
                let cardToSend = await listCard.itemListCard(result, config.logoToDisplay[0], config.cardTitle.poListCard, config.listCardAction.po,config.purchaseManagerServiceList)
                return res.json(cardToSend)
            } else {
                text = "No Purchase Order found, Please try again!"
                return res.json({ text })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({ status: 400, message: config.errorMessage }).json();
        }
    }
    async function poWaterfallStep2(req,res) {
        try {
            let result = await poData.getPOData(req.body.action.parameters[0].value)
            if ((result.length > 0) && (result !== config.errorMessage)) {
                let cardToSend = await detailCard.detailCard(result[0], config.poDetailCard, 'po', config.logoToDisplay[0],config.cardTitle.poDetailCard,config.purchaseManagerServiceList)
                return res.json(cardToSend)
            } else {
                text = "No Purchase Order found with given details. Here are some Purchase Requisition you might want to see!"
                return res.json({ text })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({ status: 400, message: config.errorMessage }).json();
        }
    }
    return {
        poWaterfallStep1,
        poWaterfallStep2
    }
}

module.exports = poMain