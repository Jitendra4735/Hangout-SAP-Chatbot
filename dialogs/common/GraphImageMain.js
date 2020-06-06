const graphImageWaterfall = "graphImageWaterfall"
const config = require('../../utility/config')
const graphImageCard = require('../../cards/common/graphImageCard')
const personaCard = require('../../cards/personaCard')
function graphImageMain() {

    async function graphImageMainStep1(req, res, globalVar) {
        if (globalVar[`${req.body.user.email}`]['graphName'] === config.purchaseManagerServiceList[0]) {
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.purchaseManagerServiceList[0], config.purchaseManagerServiceList)
            return res.json(cardToSend)
        } else if (globalVar[`${req.body.user.email}`]['graphName'] === config.purchaseManagerServiceList[1]) {
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.purchaseManagerServiceList[1], config.purchaseManagerServiceList)
            return res.json(cardToSend)
        } else if (globalVar[`${req.body.user.email}`]['graphName'] === config.purchaseManagerServiceList[2]) {
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.purchaseManagerServiceList[2], config.purchaseManagerServiceList)
            return res.json(cardToSend)
        } else if (globalVar[`${req.body.user.email}`]['graphName'] === config.salesManagerServiceList[2]) {
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.salesManagerServiceList[2], config.salesManagerServiceList)
            return res.json(cardToSend)
        } else {
            let card = personaCard.showPersonaCard(req.body.message.sender.displayName);
            return res.json(card)
        }
    }
    return {
        graphImageMainStep1
    }
}

module.exports = graphImageMain