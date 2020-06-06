const timeOut = require('../../utility/timeout')
const config = require('../../utility/config')
const graphImageCard = require('../../cards/common/graphImageCard')
const personaCard = require('../../cards/personaCard')
function PurchaseManagerMain() {
    async function purchaseManagerWaterfallStep1(req, res) {
        try {
            //Displaying the service card
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.purchaseManagerServiceList[0],config.purchaseManagerServiceList)
            return res.json(cardToSend)
        } catch (error) {
            console.error();
        }
    } 
    return {
        purchaseManagerWaterfallStep1
    }
}

module.exports = PurchaseManagerMain
