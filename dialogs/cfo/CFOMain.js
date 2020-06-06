const { CardFactory, ActivityTypes } = require('botbuilder');
const {
    Dialog,
    DialogSet,
    WaterfallDialog,
    ComponentDialog,
    DialogTurnStatus
} = require('botbuilder-dialogs');

const serviceList = require('../../cards/common/serviceList1')
const timeOut = require('../../utility/timeout')
const config = require('../../utility/config')
const cfoCard = require('../../cards/cfoDashboard')
const CFOWaterfall = 'CFOWaterfall'
const getData = require('../../data/database/cfo/cfoData')
const imageDataApi = require('../../data/api/cfoDashboard')


class CFOMain extends ComponentDialog {
    constructor(userData) {
        super(CFOWaterfall);
        this.userData = userData
        this.addDialog(new WaterfallDialog(CFOWaterfall, [
            this.CFOWaterfallStep1.bind(this),
            this.CFOWaterfallStep2.bind(this)
        ]));
        this.initialDialogId = CFOWaterfall
    }
    async CFOWaterfallStep1(step) {
        await step.context.sendActivity({ type: ActivityTypes.Typing });
        try {
            var data = await getData.getCFOData();
            if ((data.length > 0) && (data !== config.errorMessage)) {
                var imageData = await imageDataApi.generateCFODashboard(data);
                var result = await cfoCard.cardToDisplay(config.logoToDisplay[0], config.cardTitle.cfoDashboard, imageData);
                await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(result)] })
                await timeOut.timeout(2000);
                await step.context.sendActivity({ attachments: [CardFactory.adaptiveCard(serviceList.cardToDisplay(config.CFOserviceList))] })
            } else {
                await step.context.sendActivity("No data found for CFO KPI, please try again!")
            }
        } catch (error) {
            console.error(error);
        }
        return Dialog.EndOfTurn
    }
    async CFOWaterfallStep2(step) {
        await step.context.sendActivity({ type: ActivityTypes.Typing });
        try {
            let accountDetails = await this.userData.get(step.context);
            accountDetails.accountId = null
            accountDetails.accountName = null
            await this.userData.set(step.context, accountDetails);
        } catch (error) {
            console.error(error);
        }
        return await step.replaceDialog('mainWaterfall', { "persona": config.personaList[3].nameToDisplay })
        return Dialog.EndOfTurn
    }
}

module.exports.CFOMain = CFOMain
module.exports.CFOWaterfall = CFOWaterfall
