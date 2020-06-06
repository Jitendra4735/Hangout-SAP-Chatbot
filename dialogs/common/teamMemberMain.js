const teamCard = require('../../cards/common/teamCard')
const config = require('../../utility/config')
const serviceList = require('../../cards/common/serviceList1')
const timeOut = require('../../utility/timeout')
const teamData = require('../../data/database/common/teamData')

function teamMain(){
    async function teamWaterfallStep1(req,res) {
        await step.context.sendActivity({ type: ActivityTypes.Typing });
        let accountDetails = await this.userData.get(step.context);
        try {
            if (step.context.activity && step.context.activity.text) {
                if (step.context.activity.text.toLowerCase().includes('purchase')) {
                    step.options.persona = config.personaList[2].nameToDisplay
                    var cardsResult = await teamCard.teamCard('procurement', config.procurmentTeamCard)
                    await step.context.sendActivity(MessageFactory.carousel(cardsResult));
                    await timeOut.timeout(1000);
                    await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(serviceList.cardToDisplay(config.purchaseManagerServiceList))] })
                } else {
                    var cardsResult = await teamCard.teamCard('sales', config.salesTeamCard)
                    step.options.persona = config.personaList[1].nameToDisplay
                    await step.context.sendActivity(MessageFactory.carousel(cardsResult));
                    await timeOut.timeout(1000);
                    await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(serviceList.cardToDisplay(config.salesManagerServiceList))] })
                }
            }
            else if ((step.options.persona === config.personaList[2].nameToDisplay)) {
                var cardsResult = await teamCard.teamCard('procurement', config.procurmentTeamCard)
                step.options.persona = config.personaList[2].nameToDisplay
                await step.context.sendActivity(MessageFactory.carousel(cardsResult));
                await timeOut.timeout(1000);
                await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(serviceList.cardToDisplay(config.purchaseManagerServiceList))] })
            }
            else {
                var cardsResult = await teamCard.teamCard('sales', config.salesTeamCard)
                step.options.persona = config.personaList[1].nameToDisplay
                await step.context.sendActivity(MessageFactory.carousel(cardsResult));
                await timeOut.timeout(1000);
                await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(serviceList.cardToDisplay(config.salesManagerServiceList))] })
            }
        } catch (error) {
            console.error(error);
            await step.context.sendActivity("Error occured while showing team List, Please try again!")
        }
    }
    async function teamWaterfallStep2(req,res) {
        await step.context.sendActivity({ type: ActivityTypes.Typing });
        let accountDetails = await this.userData.get(step.context);
        if ((step.context.activity && step.context.activity.text && (step.context.activity.text.toLowerCase().includes('purchase')) || (step.options.persona === config.personaList[2].nameToDisplay))) {
            return await step.beginDialog('mainWaterfall', { "persona": config.personaList[2].nameToDisplay })
        } else {
            return await step.beginDialog('mainWaterfall', { "persona": config.personaList[1].nameToDisplay })
        }
    }
    return {
        teamWaterfallStep1,
        teamWaterfallStep2
    }

}

module.exports = teamMain