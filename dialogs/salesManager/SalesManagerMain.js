const serviceList = require('../../cards/common/serviceList')
const timeOut = require('../../utility/timeout')
const config = require('../../utility/config')
const graphImageCard = require('../../cards/common/graphImageCard')


function SalesManagerMain() {
    async function salesManagerWaterfallStep1(req, res) {
        try {
            var cardToSend = await graphImageCard.graphImage(config.logoToDisplay[0], config.salesManagerServiceList[2],config.salesManagerServiceList)
            return res.send(cardToSend);
        } catch (error) {
            console.error(error);
        }
    }
    return {
        salesManagerWaterfallStep1
    }
}

module.exports = SalesManagerMain
